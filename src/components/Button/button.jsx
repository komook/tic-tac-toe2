import Link from "next/link"

const Button =( {url, text}) => {
    
    return(
      <Link href={url}>
        <button >{text}</button>
      </Link>
    )
  }
  export default Button