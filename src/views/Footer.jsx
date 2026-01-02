import React from 'react'
import { Instagram,Youtube,Linkedin,Github} from 'lucide-react'

const socialLinks=[
  {
    name:"Github",
    url:"https://github.com/pratiksha950?tab=repositories",
    Icon:<Github />
  },
  {
    name:"LinkedIn",
    url:"linkedin.com/in/pratiksha950",
    Icon:<Linkedin />
  },
  {
    name:"Youtube",
    url:"youtube.com/@pratiksha950",
    Icon:<Youtube />
  },
  {
    name:"Instagram",
    url:"instagram.com/pratiksha950/",
    Icon:<Instagram />
  }
]

const FooterLink=({name,url,Icon})=>{
  return(
    <a href={url} className='inline mx-2 align-middle'>
      {Icon} {name}
    </a>
  )
}

function Footer() {
  return (
    <>

    <div className='w-full bg-green-500 h-16 flex items-center justify-center'>
      Made with ❤️ by VeggieHub
    </div>
    <div className='w-full bg-green-500 h-12 flex items-center justify-center  '>
            {socialLinks.map(({ name, url, Icon }, index) => {
        return (
          <FooterLink
            key={index}
            name={name}
            url={url}
            Icon={Icon}
          />
        );
      })}

    </div>


    </>
  )
}

export default Footer