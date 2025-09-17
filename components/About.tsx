export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <div>
          <img
            src="/about.jpg"
            alt="Yati Kitchen"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">About Yati Kitchen</h2>
          <p className="text-gray-600 mb-6">
            In 2024, we welcomed{" "}
            <span className="font-semibold text-pink-600">
              50,000+ happy travelers
            </span>{" "}
            from around the world. We provide authentic local meals, cozy stays,
            and unforgettable Cameron Highlands tours. Come as a guest, leave as
            family. 🌿
          </p>
          <button className="gradient-btn w-fit">Learn More</button>
        </div>
      </div>
    </section>
  );
}
