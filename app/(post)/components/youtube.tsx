"use client";
import YT from "react-youtube";

const YouTubeShim = YT as any;

export function YouTube(props: any) {
  return (
    <span className="block my-5">
      <YouTubeShim width="100%" {...props} />
    </span>
  );
}
