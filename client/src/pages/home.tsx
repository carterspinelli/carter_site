"use client";
import { InView } from "@/components/ui/in-view";

export default function Home() {
  return (
    <div className="h-[100vh] w-full overflow-auto">
      <div className="py-12 text-center text-sm">Scroll down</div>
      <div className="flex h-[calc(100vh-48px)] items-end justify-center px-4 pb-24">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="max-w-96">
            <p>
              <strong className="font-medium">
                Craft beautiful animated components with Motion-Primitives.
              </strong>{" "}
              Designed for developers and designers. The library leverages the
              power of Framer Motion, with intuitive APIs that simplifies
              creating complex animations for any project. Start building more
              dynamic interfaces today.
            </p>
          </div>
        </InView>
      </div>
    </div>
  );
}
