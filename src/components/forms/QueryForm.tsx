'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { querySchema, type QueryInput } from "@/lib/validators";

export function QueryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QueryInput>({ resolver: zodResolver(querySchema) });

  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input placeholder="Name" {...register("name")} />
      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}

      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}

      <input placeholder="Subject" {...register("subject")} />
      {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}

      <textarea rows={4} placeholder="Message" {...register("message")} />
      {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}