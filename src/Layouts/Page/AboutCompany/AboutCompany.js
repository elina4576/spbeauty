import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div className="container px-5 pt-3">
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex row gap-5'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;