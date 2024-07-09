export const formatMilliseconds = (ms: number) => {
  // Calculate minutes, seconds, and remaining milliseconds
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10); // Convert to hundredths of a second

  // Pad minutes and seconds with leading zeros if needed
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");
  const paddedMilliseconds = String(milliseconds).padStart(2, "0");

  return [paddedMinutes, paddedSeconds, paddedMilliseconds];
};
