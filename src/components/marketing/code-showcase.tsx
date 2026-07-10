import { highlightCode } from "@/lib/highlight-code";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

const sampleAL = `table 50100 "Customer Loyalty"
{
    Caption = 'Customer Loyalty';
    DataClassification = CustomerContent;

    fields
    {
        field(1; "Customer No."; Code[20])
        {
            Caption = 'Customer No.';
            TableRelation = Customer;
        }
        field(2; "Loyalty Points"; Integer)
        {
            Caption = 'Loyalty Points';
            MinValue = 0;
        }
        field(3; "Tier"; Enum "Loyalty Tier")
        {
            Caption = 'Tier';
        }
    }

    keys
    {
        key(PK; "Customer No.")
        {
            Clustered = true;
        }
    }
}`;

export async function CodeShowcase() {
  const highlightedHtml = await highlightCode(sampleAL, "al");

  return (
    <Section variant="gradient">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          align="left"
          label="Code First"
          title="Learn AL the Right Way"
          description="Every lesson includes production-quality AL code with syntax highlighting, copy buttons, and downloadable source files."
          className="mb-0 sm:mb-0"
        />

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/20 via-[var(--bc-cyan)]/10 to-transparent blur-2xl" />

          <div className="glass-card relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Editor chrome */}
            <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  CustomerLoyalty.Table.al
                </span>
              </div>
              <Badge variant="technical" className="text-[10px]">
                AL
              </Badge>
            </div>

            {/* Code content */}
            <div
              className="code-showcase overflow-x-auto p-4 text-sm leading-relaxed [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:font-mono"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
