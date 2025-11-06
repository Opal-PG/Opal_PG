import React, { useEffect } from "react";

export default function Feedback() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js" ;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="feedback" className="feedback-section py-5">
      <div className="container text-center">
        {/* Elfsight div */}
        <div class="elfsight-app-a522133b-1c43-43e9-9d2d-50174ef1742f" data-elfsight-app-lazy></div>

      </div>
    </section>
  );
}
