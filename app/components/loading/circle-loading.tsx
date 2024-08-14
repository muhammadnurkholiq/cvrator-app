export default function CircleLoading() {
  return (
    <div className="flex items-center justify-center h-[100%]">
      <div
        className="relative w-16 h-16 border-dashed rounded-full animate-spin"
        style={{
          border: "4px dashed transparent",
          borderRadius: "50%",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(90deg, red 50%, white 50%)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box"
        }}
      ></div>
    </div>
  );
}
