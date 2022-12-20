import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    return (
<<<<<<< HEAD
        <div className='d-inline-flex flex-column gap-2 mt-4 addresses_border p-4 col'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column my-5 gap-5'>
=======
        <div className="d-inline-flex flex-column gap-2 addresses_border col">
            <div className="title">Адреса заведений</div>
            <div className="d-inline-flex flex-column mt-4 mb-5 gap-4">
>>>>>>> 426dce1254061ea495b07b512e02e9ad54658879
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