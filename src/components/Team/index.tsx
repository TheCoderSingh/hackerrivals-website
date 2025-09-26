import { Linkedin, Github, X, Mail, Link } from 'iconoir-react';
import { teamContent, teamMembers } from '../../constants/team';

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-30 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-accent rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/4 w-40 h-40 bg-primary rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            {teamContent.header.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            {teamContent.header.subtitle}
          </p>
        </div>

        {/* Team Members - Modern Circular Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-8 xl:gap-12 mb-12 md:mb-16 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular Avatar with Cyberpunk Glow */}
              <div className="relative mb-4">
                <div
                  className={`relative w-28 h-28 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mx-auto rounded-full overflow-hidden border-3 transition-all duration-500 ${
                    member.isJoinCard
                      ? 'border-accent shadow-neon-accent group-hover:shadow-neon-accent-lg'
                      : 'border-primary shadow-neon group-hover:shadow-neon-lg'
                  }`}
                >
                  {/* Rotating border animation */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      member.isJoinCard ? 'bg-gradient-conic-accent' : 'bg-gradient-conic-primary'
                    } animate-spin-slow`}
                  ></div>

                  {/* Inner image container */}
                  <div className="absolute inset-1 rounded-full overflow-hidden bg-card">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                          member.isJoinCard ? 'object-top' : ''
                        }`}
                      />
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center text-4xl lg:text-6xl opacity-60 ${
                          member.isJoinCard ? 'bg-gradient-secondary' : 'bg-gradient-primary'
                        }`}
                      >
                        ?
                      </div>
                    )}
                  </div>

                  {/* Hover overlay with role */}
                  <div
                    className={`absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      member.isJoinCard ? 'bg-accent/20' : 'bg-primary/20'
                    } backdrop-blur-sm`}
                  >
                    <span
                      className={`font-body font-semibold text-xs uppercase tracking-wider ${
                        member.isJoinCard ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Pulsing ring effect */}
                <div
                  className={`absolute inset-0 w-28 h-28 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mx-auto rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                    member.isJoinCard ? 'bg-accent' : 'bg-primary'
                  } animate-ping`}
                ></div>
              </div>

              {/* Member Info */}
              <div className="flex flex-col h-44 md:h-48 lg:h-52 xl:h-48 space-y-2 lg:space-y-3">
                {/* Name - Fixed height with first/last name on separate lines */}
                <div className="h-14 lg:h-16 flex items-center justify-center">
                  <h3
                    className={`font-heading font-bold text-base md:text-lg lg:text-lg xl:text-xl transition-colors duration-300 text-center leading-tight ${
                      member.isJoinCard
                        ? 'text-accent group-hover:text-accent'
                        : 'text-white group-hover:text-primary'
                    }`}
                  >
                    {member.isJoinCard
                      ? member.name
                      : member.name
                          .split(' ')
                          .map((namePart, index) => <div key={index}>{namePart}</div>)}
                  </h3>
                </div>

                {/* Description - Flexible height */}
                <div className="flex-1 flex items-start justify-center px-1 lg:px-2">
                  <p className="font-body text-muted-foreground text-xs md:text-sm lg:text-sm xl:text-sm leading-relaxed max-w-36 md:max-w-44 lg:max-w-40 xl:max-w-44 mx-auto text-center">
                    {member.description}
                  </p>
                </div>

                {/* Action buttons and Social - Fixed position at bottom */}
                <div className="flex flex-col items-center gap-3 mt-auto">
                  {/* Join button for the join card */}
                  {member.isJoinCard && (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary-neon font-body text-xs px-4 py-1 transform hover:scale-105 transition-all duration-300 hover:cursor-pointer inline-block text-center"
                    >
                      Join Us
                    </a>
                  )}

                  {/* Social Links - Always at bottom */}
                  {member.social && (
                    <div className="flex justify-center gap-2 opacity-100 transition-opacity duration-300">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card/50 border border-muted-foreground/50 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon backdrop-blur-sm"
                        >
                          <Linkedin width="1em" height="1em" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card/50 border border-muted-foreground/50 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon backdrop-blur-sm"
                        >
                          <Github width="1em" height="1em" />
                        </a>
                      )}
                      {member.social.portfolio && (
                        <a
                          href={member.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card/50 border border-muted-foreground/50 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon backdrop-blur-sm"
                        >
                          <Link width="1em" height="1em" />
                        </a>
                      )}
                      {member.social.x && (
                        <a
                          href={member.social.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-card/50 border border-muted-foreground/50 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon backdrop-blur-sm"
                        >
                          <X width="1em" height="1em" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          className="w-8 h-8 bg-card/50 border border-muted-foreground/50 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon backdrop-blur-sm"
                        >
                          <Mail width="1em" height="1em" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
