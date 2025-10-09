const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-ocean-blue text-ocean-blue-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-ocean-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg leading-relaxed">
              At Arca Marina, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
            <p className="text-lg leading-relaxed">
              We may collect personal information such as your name, email address, phone number, and business details when you 
              contact us or place an order.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-lg leading-relaxed">
              Your information is used solely for business purposes, including processing orders, responding to inquiries, and 
              improving our services. We do not share your personal data with third parties without your consent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-lg leading-relaxed">
              We implement industry-standard security measures to protect your information from unauthorized access, disclosure, 
              or misuse.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:sale@arcamarina.com" className="text-primary hover:text-secondary">
                sale@arcamarina.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
