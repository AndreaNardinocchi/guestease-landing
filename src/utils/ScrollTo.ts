// export const scrollToSection = (id: string) => {
//   const el = document.getElementById(id);
//   if (!el) return;

//   window.scrollTo({
//     top: el.offsetTop - 80, // adjust for navbar height
//     behavior: "smooth",
//   });
// };

// export const scrollToSection = (id: string) => {
//   const target = document.getElementById(id);
//   if (!target) return;

//   const start = window.pageYOffset;
//   const end = target.offsetTop - 80; // adjust for navbar
//   const distance = end - start;
//   const duration = 700; // ms
//   let startTime: number | null = null;

//   const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

//   const animation = (currentTime: number) => {
//     if (!startTime) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const progress = Math.min(timeElapsed / duration, 1);

//     window.scrollTo(0, start + distance * easeOutCubic(progress));

//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   };

//   requestAnimationFrame(animation);
// };

export const scrollToSection = (id: string) => {
  let end = 0;

  if (id !== "top") {
    const target = document.getElementById(id);
    if (!target) return;
    end = target.offsetTop - 80; // adjust for navbar
  }

  const start = window.pageYOffset;
  const distance = end - start;
  const duration = 700;
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easeOutCubic(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
