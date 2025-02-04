import Image from "next/image";
import { BriefcaseBusiness, Award, BarChart2, Medal } from "lucide-react";

export default function SkillsBenefits() {
  const benefits = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12C3 15.7712 3 19.6569 4.31802 20.8284C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.8284C21 19.6569 21 15.7712 21 12"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M14.6603 14.2019L20.8579 12.3426C21.2688 12.2194 21.4743 12.1577 21.6264 12.0355C21.7592 11.9288 21.8626 11.7898 21.9266 11.6319C22 11.4511 22 11.2366 22 10.8077C22 9.12027 22 8.27658 21.6703 7.63268C21.3834 7.07242 20.9276 6.61659 20.3673 6.32971C19.7234 6 18.8797 6 17.1923 6H6.80765C5.12027 6 4.27658 6 3.63268 6.32971C3.07242 6.61659 2.61659 7.07242 2.32971 7.63268C2 8.27658 2 9.12027 2 10.8077C2 11.2366 2 11.4511 2.07336 11.6319C2.13743 11.7898 2.24079 11.9288 2.37363 12.0355C2.52574 12.1577 2.73118 12.2194 3.14206 12.3426L9.33968 14.2019"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M14 12.5H10C9.72386 12.5 9.5 12.7239 9.5 13V15.1615C9.5 15.3659 9.62448 15.5498 9.8143 15.6257L10.5144 15.9058C11.4681 16.2872 12.5319 16.2872 13.4856 15.9058L14.1857 15.6257C14.3755 15.5498 14.5 15.3659 14.5 15.1615V13C14.5 12.7239 14.2761 12.5 14 12.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),

      title: "Enhance Your Employment Path",
      description:
        "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="16" r="3" stroke="white" strokeWidth="1.5" />
          <path
            d="M12 19.2597L9.73713 21.4292C9.41306 21.7399 9.25102 21.8952 9.1138 21.949C8.80111 22.0715 8.45425 21.9666 8.28977 21.6999C8.21758 21.5829 8.19509 21.3718 8.1501 20.9495C8.1247 20.7111 8.112 20.5919 8.07345 20.4921C7.98715 20.2686 7.80579 20.0947 7.57266 20.012C7.46853 19.975 7.3442 19.9629 7.09553 19.9385C6.65512 19.8954 6.43491 19.8738 6.31283 19.8046C6.03463 19.6469 5.92529 19.3144 6.05306 19.0146C6.10913 18.883 6.27116 18.7277 6.59523 18.417L8.07345 16.9998L9.1138 15.9595"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M12 19.2597L14.2629 21.4291C14.5869 21.7398 14.749 21.8952 14.8862 21.9489C15.1989 22.0714 15.5457 21.9666 15.7102 21.6999C15.7824 21.5828 15.8049 21.3717 15.8499 20.9495C15.8753 20.7111 15.888 20.5919 15.9265 20.4921C16.0129 20.2686 16.1942 20.0947 16.4273 20.012C16.5315 19.975 16.6558 19.9628 16.9045 19.9385C17.3449 19.8953 17.5651 19.8738 17.6872 19.8046C17.9654 19.6469 18.0747 19.3143 17.9469 19.0146C17.8909 18.883 17.7288 18.7277 17.4048 18.417L15.9265 16.9998L15 16.0732"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M17.3197 17.9957C19.2921 17.9748 20.3915 17.8512 21.1213 17.1213C22 16.2426 22 14.8284 22 12V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2L8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8L2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.64706 17.8897 4.82497 17.9862 7 17.9983"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M9 6L15 6"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7 9.5H17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Earn Recognition and Prizes",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="19" cy="5" r="3" stroke="white" strokeWidth="1.5" />
          <path
            d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Personal Growth",
      description:
        "Challenge yourself, learn new skills, and expand your professional network",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1459 7.02251C11.5259 6.34084 11.7159 6 12 6C12.2841 6 12.4741 6.34084 12.8541 7.02251L12.9524 7.19887C13.0603 7.39258 13.1143 7.48944 13.1985 7.55334C13.2827 7.61725 13.3875 7.64097 13.5972 7.68841L13.7881 7.73161C14.526 7.89857 14.895 7.98205 14.9828 8.26432C15.0706 8.54659 14.819 8.84072 14.316 9.42898L14.1858 9.58117C14.0429 9.74833 13.9714 9.83191 13.9392 9.93531C13.9071 10.0387 13.9179 10.1502 13.9395 10.3733L13.9592 10.5763C14.0352 11.3612 14.0733 11.7536 13.8435 11.9281C13.6136 12.1025 13.2682 11.9435 12.5773 11.6254L12.3986 11.5431C12.2022 11.4527 12.1041 11.4075 12 11.4075C11.8959 11.4075 11.7978 11.4527 11.6014 11.5431L11.4227 11.6254C10.7318 11.9435 10.3864 12.1025 10.1565 11.9281C9.92674 11.7536 9.96476 11.3612 10.0408 10.5763L10.0605 10.3733C10.0821 10.1502 10.0929 10.0387 10.0608 9.93531C10.0286 9.83191 9.95713 9.74833 9.81418 9.58117L9.68403 9.42898C9.18097 8.84072 8.92945 8.54659 9.01723 8.26432C9.10501 7.98205 9.47396 7.89857 10.2119 7.73161L10.4028 7.68841C10.6125 7.64097 10.7173 7.61725 10.8015 7.55334C10.8857 7.48944 10.9397 7.39258 11.0476 7.19887L11.1459 7.02251Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M12 16.0678L8.22855 19.9728C7.68843 20.5321 7.41837 20.8117 7.18967 20.9084C6.66852 21.1289 6.09042 20.9402 5.81628 20.4602C5.69597 20.2495 5.65848 19.8695 5.5835 19.1095C5.54117 18.6804 5.52 18.4658 5.45575 18.2861C5.31191 17.8838 5.00966 17.5708 4.6211 17.4219C4.44754 17.3554 4.24033 17.3335 3.82589 17.2896C3.09187 17.212 2.72486 17.1732 2.52138 17.0486C2.05772 16.7648 1.87548 16.1662 2.08843 15.6266C2.18188 15.3898 2.45194 15.1102 2.99206 14.5509L5.45575 12"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M12 16.0678L15.7715 19.9728C16.3116 20.5321 16.5816 20.8117 16.8103 20.9084C17.3315 21.1289 17.9096 20.9402 18.1837 20.4602C18.304 20.2495 18.3415 19.8695 18.4165 19.1095C18.4588 18.6804 18.48 18.4658 18.5442 18.2861C18.6881 17.8838 18.9903 17.5708 19.3789 17.4219C19.5525 17.3554 19.7597 17.3335 20.1741 17.2896C20.9081 17.212 21.2751 17.1732 21.4786 17.0486C21.9423 16.7648 22.1245 16.1662 21.9116 15.6266C21.8181 15.3898 21.5481 15.1102 21.0079 14.5509L18.5442 12"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers field and spaces",
    },
  ];

  return (
    <div className="bg-[#F9FAFB] p-8 rounded-lg shadow-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-2">
        What else can I gain from participating in Skills Challenges?
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Join Skills Challenges Program to accelerate your career growth and
        become part of Africa's largest workforce of digital professionals.
      </p>

      <div className="grid md:grid-cols-2 gap-x-36 gap-y-12 items-center px-8 left-10 ml-80">
        <div className="grid grid-cols-2 gap-x-40 gap-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-600 p-3 rounded-lg mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute rounded-3xl float-right" />
          <div className="relative">
            <Image
              src="/images/banner.png"
              alt="Skill section banner"
              width={400}
              height={300}
              className="rounded-2x h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
