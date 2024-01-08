import MemberProfile from "./MemberProfile"
import NavLinks from "./NavLinks"
import SideBarHeader from "./SideBarHeader"

const SideBar = ()=>{

    return (
        <div className="px-4 w-80 bg-base-300 py-12 min-h-full grid grid-rows-[auto,1fr,auto]">
            <SideBarHeader />
            <NavLinks />
            <MemberProfile />
        </div>
    )

}
export default SideBar