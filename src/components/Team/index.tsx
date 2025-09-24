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

      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`card-gaming transform hover:scale-105 transition-all duration-500 animate-slide-up relative overflow-hidden group ${
                member.isJoinCard ? 'border-dashed border-2 border-accent' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Cyberpunk glow effect */}
              <div
                className={`absolute inset-0 ${
                  member.isJoinCard ? 'bg-gradient-secondary' : 'bg-gradient-primary'
                } opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-60`}
              ></div>

              {/* Profile Image Placeholder */}
              <div className="relative mb-6">
                {member.image ? (
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-64 h-64 mx-auto rounded-lg object-cover border-2 shadow-neon ${
                        member.isJoinCard ? 'object-top' : 'border-primary'
                      }`}
                    />
                    {member.isJoinCard && (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/30 rounded-lg"></div>
                    )}
                  </div>
                ) : (
                  <div
                    className={`w-64 h-64 mx-auto rounded-lg border-2 shadow-neon flex items-center justify-center ${
                      member.isJoinCard
                        ? 'bg-gradient-secondary border-accent opacity-50'
                        : 'bg-gradient-primary border-primary opacity-30'
                    }`}
                  >
                    {member.isJoinCard && <div className="text-6xl opacity-60">?</div>}
                  </div>
                )}
              </div>

              {/* Member Info */}
              <div className="text-center relative z-10">
                <h3
                  className={`font-heading font-bold text-xl mb-2 animate-glow-pulse ${
                    member.isJoinCard ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`font-body font-semibold text-sm mb-3 uppercase tracking-wider ${
                    member.isJoinCard ? 'text-accent' : 'text-secondary'
                  }`}
                >
                  {member.role}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Join button for the join card */}
                {member.isJoinCard && (
                  <button className="btn-secondary-neon font-body text-sm px-6 py-2 transform hover:scale-105 transition-all duration-300 hover:cursor-pointer">
                    Join Our Team
                  </button>
                )}

                {/* Social Links */}
                {member.social && (
                  <div className="flex justify-center gap-3 mt-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-card border border-muted-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon"
                      >
                        <Linkedin width="1.2em" height="1.2em" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-card border border-muted-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon"
                      >
                        <Github width="1.2em" height="1.2em" />
                      </a>
                    )}
                    {member.social.portfolio && (
                      <a
                        href={member.social.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-card border border-muted-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon"
                      >
                        <Link width="1.2em" height="1.2em" />
                      </a>
                    )}
                    {member.social.x && (
                      <a
                        href={member.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-card border border-muted-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon"
                      >
                        <X width="1.2em" height="1.2em" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-card border border-muted-foreground rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300 hover:shadow-neon"
                      >
                        <Mail width="1.2em" height="1.2em" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Cyberpunk corner accents */}
              <div
                className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-60 ${
                  member.isJoinCard ? 'border-accent' : 'border-accent'
                }`}
              ></div>
              <div
                className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-60 ${
                  member.isJoinCard ? 'border-accent' : 'border-accent'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
