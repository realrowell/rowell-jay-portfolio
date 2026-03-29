export default function CtaButton({children, className, ...rest}: React.ButtonHTMLAttributes<HTMLButtonElement> & {children: React.ReactNode}){
    // return <button className={`bg-(--primary-color) text-white px-5 py-3 rounded-md ${className}`} {...rest}>
    //     {children}
    // </button>
    return <button className={`relative inline-block font-medium group py-2 px-5 hover:cursor-pointer ${className}`} {...rest}>
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-(--bg-shadow-color) group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-(--primary-color) group-hover:bg-(--primary-color)"></span>
              <span className="relative text-white fs-25">{children}</span>
            </button> 
}