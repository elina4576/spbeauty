import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    return (
        <div className="d-inline-flex flex-column gap-2 addresses_border col">
            <div className="title">Адреса заведений</div>
            <div className="d-inline-flex flex-column mt-4 mb-5 gap-4">
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
            <div className="d-inline-flex mt-auto">
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;