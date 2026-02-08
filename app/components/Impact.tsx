import { Reveal } from "./ui/Reveal";

export default function Impact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-khewra-dark mb-16">
            Farmer Benefits & Impact
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-khewra-primary">Why Farmers Choose Us</h3>
              <div className="space-y-4">
                {[
                  { title: "Additional Income", text: "Earn money from selling crop residues that earlier had no market value." },
                  { title: "Zero-Burning Approach", text: "Eliminate stubble burning, reducing pollution." },
                  { title: "Faster Field Clearing", text: "Mechanised clearing in 24–48 hours enables timely sowing." },
                  { title: "Reduced Labour Burden", text: "Machines complete work quickly, avoiding manual handling." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-khewra-accent font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-khewra-accent">
              <h3 className="text-2xl font-bold text-khewra-dark mb-6">Our Broader Impact</h3>
              <ul className="grid gap-4">
                {[
                  "Supporting farmers in reducing cost of cultivation",
                  "Creating new income streams through agro-waste",
                  "Strengthening rural employment and entrepreneurship",
                  "Supplying consistent-quality biomass to industries",
                  "Ensuring stable demand for vegetables & agri-produce"
                ].map((impact, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="text-green-500">✔</span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}