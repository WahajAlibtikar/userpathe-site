"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Skill } from "../data/skills-data";

export function SkillViewTabs({ skill }: { skill: Skill }) {
  const [activeTab, setActiveTab] = useState<"guide" | "raw">("guide");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(skill.markdown);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 20,
        }}
      >
        <div className="skillTabs" role="tablist" style={{ margin: 0, flex: 1 }}>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "guide"}
            className={`skillTabBtn ${activeTab === "guide" ? "active" : ""}`}
            onClick={() => setActiveTab("guide")}
          >
            شرح المهارة ودليل الاستخدام
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "raw"}
            className={`skillTabBtn ${activeTab === "raw" ? "active" : ""}`}
            onClick={() => setActiveTab("raw")}
          >
            ملف skill.md الكامل (Markdown)
          </button>
        </div>

        <button
          type="button"
          className={`copySkillBtn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          aria-label="نسخ ملف المهارة"
        >
          {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
          <span>{copied ? "تم النسخ بنجاح ✓" : "نسخ المهارة"}</span>
        </button>
      </div>

      {activeTab === "guide" ? (
        <div className="skillMarkdownViewer">
          <div className="articleIntroBox">
            <strong>الهدف المباشر:</strong> {skill.desc}
          </div>

          <h3>نماذج الذكاء الاصطناعي المدعومة</h3>
          <p>
            هذا الملف مصمم ليعمل كـ <code>System Prompt</code> أو في إعدادات{" "}
            <code>Custom Instructions</code> في ChatGPT أو مشاريع Claude Projects
            أو Gemini Gems.
          </p>
          <div style={{ marginBottom: 20 }}>
            <code dir="ltr">{skill.models}</code>
          </div>

          <h3>كيفية الاستخدام في 3 خطوات:</h3>
          <ol>
            <li>
              اضغط على زر <b>نسخ المهارة</b> في الأعلى لنسخ النص البرمجي الكامل
              للمهارة.
            </li>
            <li>
              الصق النص في إعدادات محادثة الذكاء الاصطناعي أو بداية الجلسة.
            </li>
            <li>
              زوّد النموذج بالمطلوب حسب القالب الموضح واستلم مخرجات منسقة ذات
              جودة احترافية.
            </li>
          </ol>

          <div className="articleTakeawaysBox" style={{ marginTop: 24 }}>
            <h3>نصيحة تطبيقية من صالح</h3>
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#333",
              }}
            >
              &ldquo;تحديد دور دقيق للنموذج (Role Prompting) وإلزامه بمعايير
              محددة يختصر عليك 70% من وقت إعادة التوجيه ويوفر عليك تكرار الشرح في
              كل جلسة جديدة.&rdquo;
            </p>
          </div>
        </div>
      ) : (
        <div className="skillMarkdownViewer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              صيغة Markdown القياسية لمهارات النماذج (skill.md):
            </span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                border: "1px solid var(--line)",
                background: "#fff",
                borderRadius: 4,
                padding: "4px 10px",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              {copied ? "تم النسخ ✓" : "نسخ الكود"}
            </button>
          </div>
          <pre>
            <code>{skill.markdown}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
