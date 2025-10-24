import FrameProvider from "~/components/providers/FrameProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <FrameProvider>{children}</FrameProvider>;
}
