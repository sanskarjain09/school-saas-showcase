"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { track } from "@/lib/analytics";

/**
 * Backend: Web3Forms (https://web3forms.com) — free, no signup required to test,
 * just replace WEB3FORMS_ACCESS_KEY with your real key from web3forms.com.
 * Until then, submissions will fail gracefully with the error state below.
 */
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  message: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  institution: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface DemoFormProps {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  /** Where the submission is coming from — helps segment leads later. */
  source?: string;
  className?: string;
}

export function DemoForm({
  title,
  subtitle,
  buttonLabel = "Request Demo",
  source = "website",
  className,
}: DemoFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.firstName.trim()) nextErrors.firstName = "Required";
    if (!values.lastName.trim()) nextErrors.lastName = "Required";
    if (!values.email.trim()) {
      nextErrors.email = "Required";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email";
    }
    if (!values.institution.trim()) nextErrors.institution = "Required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check — bots fill hidden fields, real users never see this input.
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("botcheck") as HTMLInputElement | null)?.value;
    if (honeypot) {
      // Silently pretend success so bots don't learn the check failed.
      setStatus("success");
      return;
    }

    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New demo request from ${values.institution}`,
          from_name: `${values.firstName} ${values.lastName}`,
          source,
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          institution: values.institution,
          message: values.message || "No additional details provided.",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        track("demo_form_submit", { source });
        setValues(initialValues);
      } else {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-3xl border border-border bg-surface p-10 text-center shadow-card-md sm:p-12 ${className ?? ""}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-7 w-7 text-accent" aria-hidden />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-foreground">Request sent</h3>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Thanks for reaching out. Our team will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border border-border bg-surface p-8 shadow-card-md sm:p-10 ${className ?? ""}`}
    >
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      {subtitle ? <p className="mt-2 text-sm text-muted">{subtitle}</p> : null}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Honeypot field — hidden from real users, catches bots */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={values.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
              aria-invalid={Boolean(errors.firstName)}
              className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent ${
                errors.firstName ? "border-red-400" : "border-border"
              }`}
            />
            {errors.firstName ? (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
              aria-invalid={Boolean(errors.lastName)}
              className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent ${
                errors.lastName ? "border-red-400" : "border-border"
              }`}
            />
            {errors.lastName ? (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            ) : null}
          </div>
        </div>

        <div>
          <input
            type="email"
            placeholder="Work Email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent ${
              errors.email ? "border-red-400" : "border-border"
            }`}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
        </div>

        <div>
          <input
            type="text"
            placeholder="School / Institution Name"
            value={values.institution}
            onChange={(e) => updateField("institution", e.target.value)}
            aria-invalid={Boolean(errors.institution)}
            className={`w-full rounded-xl border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent ${
              errors.institution ? "border-red-400" : "border-border"
            }`}
          />
          {errors.institution ? (
            <p className="mt-1 text-xs text-red-500">{errors.institution}</p>
          ) : null}
        </div>

        <textarea
          rows={4}
          placeholder="How can we help your institution?"
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-accent"
        />

        {status === "error" ? (
          <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>{errorMessage}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending...
            </>
          ) : (
            buttonLabel
          )}
        </button>
      </form>
    </div>
  );
}
