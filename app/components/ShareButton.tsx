"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      const shareUrl = typeof window !== "undefined" ? window.location.href : "";
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${title}\n${shareUrl}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      className={`copySkillBtn ${copied ? "copied" : ""}`}
      onClick={handleShare}
      aria-label="مشاركة المقال"
    >
      {copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}
      <span>{copied ? "تم نسخ الرابط" : "مشاركة المقال"}</span>
    </button>
  );
}
