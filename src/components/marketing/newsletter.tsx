"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 px-4 text-center text-sm text-emerald-500 sm:flex-row sm:text-base">
        <CheckCircle className="h-5 w-5" />
        <span>Thanks for subscribing! Check your inbox.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:mx-auto sm:flex-row"
    >
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="glass pl-9"
          aria-label="Email address"
        />
      </div>
      <Button type="submit" variant="brand" className="shadow-lg shadow-brand/20">
        Subscribe
      </Button>
    </form>
  );
}
