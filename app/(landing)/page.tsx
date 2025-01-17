'use client'
import { Button } from "@/components/ui/button";
import {LogIn } from "lucide-react";

const LandingPage = () => {
  return (
    <div>
      <div>Landing Page (Unprotected)</div>
      <LogIn></LogIn>
      <a href="/sign-in">
        <Button>Login</Button>
      </a>
      <a href="/sign-up">
        <Button>Register</Button>
      </a>
    </div>
  );
};
export default LandingPage;
