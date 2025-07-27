import React, { useState, useEffect, useRef } from 'react';
import { Stethoscope, Award, Heart, Star, MapPin, Mail, Users } from 'lucide-react';

const Team = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const teamMembers = [
        {
            name: "Dr. Sarah Mwangi",
            role: "Chief Veterinarian & Founder",
            specialization: "Small Animal Surgery",
            experience: "15+ years",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Dr. Sarah founded Noble Vet with a vision to provide world-class veterinary care in Kenya. She specializes in complex surgical procedures.",
            achievements: ["Kenya Veterinary Excellence Award", "Published 20+ research papers", "Trained 50+ veterinarians"]
        },
        {
            name: "Dr. James Kiprotich",
            role: "Emergency Medicine Specialist",
            specialization: "Emergency & Critical Care",
            experience: "12+ years",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Dr. James leads our 24/7 emergency services, ensuring no animal goes without immediate care when they need it most.",
            achievements: ["Emergency Medicine Certification", "Saved 1000+ critical cases", "Mobile emergency unit pioneer"]
        },
        {
            name: "Dr. Grace Wanjiku",
            role: "Exotic Animal Specialist",
            specialization: "Wildlife & Exotic Pets",
            experience: "10+ years",
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Dr. Grace brings specialized knowledge in treating exotic animals and wildlife, making her invaluable to our diverse practice.",
            achievements: ["Wildlife Conservation Award", "Exotic pet care specialist", "Zoo partnership coordinator"]
        },
        {
            name: "Dr. Michael Otieno",
            role: "Large Animal Veterinarian",
            specialization: "Livestock & Equine Care",
            experience: "14+ years",
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            bio: "Dr. Michael ensures the health of Kenya's livestock, supporting farmers and the agricultural community with expert care.",
            achievements: ["Livestock health program lead", "Farm consultation expert", "Agricultural community advocate"]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('.team-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-semibold mb-6">
                        <Users className="w-5 h-5 mr-2" />
                        Our Expert Team
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Meet the Veterinarians
                        <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Who Care for Your Pets
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our team consists of highly qualified, compassionate veterinarians who are dedicated
                        to providing the best possible care for animals of all sizes.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`team-card bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group transform ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent"></div>

                                {/* Overlay Info */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                                                <Stethoscope className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{member.specialization}</div>
                                                <div className="text-sm text-emerald-600 font-semibold">{member.experience}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {member.bio}
                                </p>

                                {/* Achievements */}
                                <div className="space-y-2 mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                        <Award className="w-4 h-4 mr-2 text-emerald-600" />
                                        Key Achievements
                                    </h4>
                                    {member.achievements.map((achievement, achievementIndex) => (
                                        <div key={achievementIndex} className="flex items-center text-sm text-gray-600">
                                            <Star className="w-3 h-3 mr-2 text-yellow-500" />
                                            {achievement}
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Button */}
                                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group/btn">
                                    <Mail className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                                    Consult with {member.name.split(' ')[1]}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;