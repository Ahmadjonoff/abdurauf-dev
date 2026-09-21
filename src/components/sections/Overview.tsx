"use client";

import { ProfileCard } from "./ProfileCard";
import { StackCard } from "./StackCard";
import { StatsBar } from "./StatsBar";

export function Overview() {
  return (
    <section id="about" className="scroll-mt-28 pt-8 md:pt-12">
      <div className="bento">
        <div className="area-profile">
          <ProfileCard />
        </div>
        <div className="area-stack flex flex-col gap-4">
          <StackCard />
          <StatsBar />
        </div>
      </div>
    </section>
  );
}
