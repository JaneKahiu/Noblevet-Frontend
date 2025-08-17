import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Phone, Calendar, CreditCard, Stethoscope } from 'lucide-react';

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('faq-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    const faqCategories = [
        {
            category: 'General Information',
            icon: HelpCircle,
            color: 'from-blue-500 to-cyan-600',
            faqs: [
                {
                    question: 'What are your operating hours?',
                    answer: 'Our operating hours vary by location. Nairobi Central and Mombasa offer 24/7 emergency services. Regular hours are typically 7:00 AM - 8:00 PM on weekdays and 8:00 AM - 6:00 PM on weekends. Please check with your specific location for exact hours.'
                },
                {
                    question: 'Do you offer emergency services?',
                    answer: 'Yes, we provide 24/7 emergency services at our Nairobi Central and Mombasa locations. For other locations, we have emergency referral systems in place. Call our emergency hotline at +254 700 123 999 for immediate assistance.'
                },
                {
                    question: 'What types of animals do you treat?',
                    answer: 'We treat a wide variety of animals including dogs, cats, rabbits, birds, and other small pets. Our Karen location specializes in exotic pets and wildlife. We also provide livestock care at our Kisumu location.'
                }
            ]
        },
        {
            category: 'Appointments & Booking',
            icon: Calendar,
            color: 'from-green-500 to-emerald-600',
            faqs: [
                {
                    question: 'How do I book an appointment?',
                    answer: 'You can book appointments through multiple methods: online via our website portal (available 24/7), by calling any of our locations, through WhatsApp at +254 700 123 458, or by visiting our clinics directly. Online booking offers real-time availability and instant confirmation.'
                },
                {
                    question: 'Can I choose my preferred veterinarian?',
                    answer: 'Yes, when booking your appointment, you can request a specific veterinarian if they are available at your chosen location. We\'ll do our best to accommodate your preference, though emergency cases may require you to see the available veterinarian.'
                },
                {
                    question: 'What if I need to cancel or reschedule?',
                    answer: 'You can cancel or reschedule appointments by calling the clinic directly, through our online portal, or via WhatsApp. We ask for at least 24 hours notice when possible to allow other pet owners to book the time slot.'
                },
                {
                    question: 'Do you accept walk-ins?',
                    answer: 'Yes, we accept walk-ins at all locations during operating hours. However, appointment holders have priority, so walk-in wait times may vary. For emergency situations, walk-ins are always accommodated immediately.'
                }
            ]
        },
        {
            category: 'Services & Treatment',
            icon: Stethoscope,
            color: 'from-purple-500 to-violet-600',
            faqs: [
                {
                    question: 'What services do you offer?',
                    answer: 'We offer comprehensive veterinary services including general check-ups, vaccinations, surgery, dental care, laboratory testing, emergency care, grooming, and boarding. Specialized services like cardiology, dermatology, and exotic pet care are available at select locations.'
                },
                {
                    question: 'Do you provide home visits?',
                    answer: 'Yes, we offer mobile veterinary services within a 50km radius of each location. Home visits are perfect for routine care, elderly pets, or animals that get stressed traveling. Schedule home visits by calling us or booking online.'
                },
                {
                    question: 'What should I bring to my pet\'s appointment?',
                    answer: 'Please bring your pet\'s medical records, vaccination certificates, a list of current medications, and any insurance documentation. For new patients, arrive 15 minutes early to complete registration forms.'
                },
                {
                    question: 'Do you offer second opinions?',
                    answer: 'Absolutely! We welcome second opinion consultations. Please bring any previous medical records, test results, and X-rays from your previous veterinarian to help us provide the most informed assessment.'
                }
            ]
        },
        {
            category: 'Payment & Insurance',
            icon: CreditCard,
            color: 'from-orange-500 to-red-600',
            faqs: [
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept cash, M-Pesa, bank transfers, credit/debit cards, and insurance claims. Payment plans are available for major procedures. We also work with most pet insurance providers in Kenya.'
                },
                {
                    question: 'Do you accept pet insurance?',
                    answer: 'Yes, we work with major pet insurance providers in Kenya. We can help process your insurance claims and provide the necessary documentation. Some treatments may require pre-approval from your insurance provider.'
                },
                {
                    question: 'Are payment plans available?',
                    answer: 'We offer flexible payment plans for major procedures and ongoing treatments. Discuss payment options with our billing team during your visit or call to discuss your specific situation.'
                },
                {
                    question: 'How much do services cost?',
                    answer: 'Service costs vary depending on the treatment required. We provide transparent pricing and detailed estimates before any procedure. Basic consultations start from KSh 2,500, with comprehensive care packages available from KSh 8,500/month.'
                }
            ]
        },
        {
            category: 'Emergency Care',
            icon: Phone,
            color: 'from-red-500 to-pink-600',
            faqs: [
                {
                    question: 'What constitutes a veterinary emergency?',
                    answer: 'Emergencies include difficulty breathing, unconsciousness, severe bleeding, suspected poisoning, inability to urinate or defecate, severe vomiting/diarrhea, seizures, or any life-threatening injuries. When in doubt, call our emergency line.'
                },
                {
                    question: 'What should I do in a pet emergency?',
                    answer: 'Stay calm, call our emergency hotline immediately (+254 700 123 999), follow our phone guidance for first aid, and transport your pet safely to our emergency facility. Do not give medications unless specifically instructed.'
                },
                {
                    question: 'Do emergency services cost more?',
                    answer: 'Emergency services after regular hours do include additional fees to cover 24/7 staffing and specialized equipment. However, we believe in transparent pricing and will discuss costs upfront whenever possible.'
                },
                {
                    question: 'Which locations offer 24/7 emergency care?',
                    answer: 'Our Nairobi Central and Mombasa locations provide full 24/7 emergency services. Other locations have emergency referral systems and can provide guidance on where to seek immediate care.'
                }
            ]
        }
    ];

    return (
        <section id="faq-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 text-blue-700 font-semibold mb-4">
                        <HelpCircle className="w-5 h-5 mr-2" />
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Quick Answers to
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Common Questions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Find answers to the most commonly asked questions about our services, 
                        appointments, and pet care. Can't find what you're looking for? Contact us directly.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {faqCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`mb-12 transform transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                        >
                            {/* Category Header */}
                            <div className={`bg-gradient-to-r ${category.color} rounded-t-2xl p-6 text-white`}>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold">{category.category}</h3>
                                </div>
                            </div>

                            {/* FAQ Items */}
                            <div className="bg-white rounded-b-2xl shadow-lg border border-gray-100">
                                {category.faqs.map((faq, faqIndex) => {
                                    const globalIndex = categoryIndex * 10 + faqIndex; // Ensure unique index
                                    const isOpen = openItems.has(globalIndex);
                                    
                                    return (
                                        <div key={faqIndex} className="border-b border-gray-100 last:border-b-0">
                                            <button
                                                onClick={() => toggleItem(globalIndex)}
                                                className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between group"
                                            >
                                                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 pr-4">
                                                    {faq.question}
                                                </span>
                                                <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`}>
                                                    {isOpen ? (
                                                        <ChevronUp className="w-4 h-4 text-white" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                            </button>
                                            
                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className={`text-center mt-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Our team is here to help! If you couldn't find the answer you were looking for,
                            don't hesitate to reach out to us directly.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Us Now
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                                <HelpCircle className="w-5 h-5 mr-2" />
                                Ask a Question
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;