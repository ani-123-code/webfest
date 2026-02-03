import { Linkedin, Mail, Phone, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
  bio: string;
  email?: string;
  phone?: string;
  company?: string;
}

export default function TeamMember({ 
  name, 
  role, 
  image, 
  linkedinUrl, 
  bio,
  email,
  phone,
  company = name === 'Mr. Govindaraju' ? ' GRKMS Private Limited' : 'EcoDispose'
}: TeamMemberProps) {  
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shortBio = bio.length > 180 ? bio.slice(0, 180) + '...' : bio;
  const shouldShowExpand = bio.length > 150;

  return (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-green-400/20 hover:border-green-400/40 h-fit">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Image Container with Hover Effect */}
        <div className="relative mb-4">
          <div className="relative w-28 h-28 mx-auto">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover transform transition-transform duration-500 group-hover:scale-105 border-3 border-green-400/30 group-hover:border-green-400/60"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Social Links */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-green-400 to-green-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="bg-gradient-to-br from-emerald-400 to-emerald-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="bg-gradient-to-br from-green-400 to-emerald-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 mb-2">
              {name}
            </h3>
            <div className="flex flex-col items-center gap-1 text-green-300 font-medium text-sm">
              <span>{role}</span>
              <div className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                <span>{company}</span>
              </div>
            </div>
          </div>

          {/* Bio with Expandable Functionality */}
          <div className="relative">
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-96' : 'max-h-16'
              }`}
            >
              <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                {isExpanded ? bio : shortBio}
              </p>
            </div>
            
          
            
            {/* Expand/Collapse Button */}
            {shouldShowExpand && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 flex items-center justify-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300 text-xs font-medium mx-auto"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="h-3 w-3" />
                  </>
                )}
              </button>
            )}
          </div>
          
        </div>
        
      </div>

      {/* Hover Border Effect */}
      <div className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-green-400/30 via-emerald-400/80 to-green-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>
      {/* Gradient fade effect when collapsed */}
            {!isExpanded && shouldShowExpand && (
              <div className="absolute bottom-0  h-16 bg-gradient-to-t from-white/80 via-white/50 to-transparent pointer-events-none" />
            )}
    </div>
  );
}