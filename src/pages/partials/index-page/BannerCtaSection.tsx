import BannerCta from "../../../components/banner/BannerCta"

export default function BannerCtaSection(){
    return<>
        <div className="flex flex-col px-5 py-10">
            <BannerCta
                description="Let’s turn your requirements into a working system."
                cta_text="LET'S WORK TOGETHER"
                url="/#contact"
            />
        </div>
    </>
}