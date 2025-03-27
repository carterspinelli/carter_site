"use client";
import { InView } from "@/components/ui/in-view";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-semibold mb-12 text-center">Motion Primitives Demo</h1>
      
      <div className="w-full max-w-2xl mx-auto border border-gray-200 rounded-lg shadow-sm bg-white">
        <div className="h-[350px] w-full overflow-auto rounded-lg">
          <div className="py-12 text-center text-sm text-gray-500">Scroll down</div>
          <div className="flex h-[500px] items-end justify-center px-4 pb-24">
            <InView
              variants={{
                hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{ margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="max-w-96">
                <p className="text-gray-800">
                  <strong className="font-medium">
                    Craft beautiful animated components with Motion-Primitives.
                  </strong>{" "}
                  <span className="text-gray-700">
                    Designed for developers and designers. The library leverages the
                    power of Framer Motion, with intuitive APIs that simplifies
                    creating complex animations for any project. Start building more
                    dynamic interfaces today.
                  </span>
                </p>
              </div>
            </InView>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This demo showcases the InView component for scroll animations</p>
      </div>
    </div>
  );
}
