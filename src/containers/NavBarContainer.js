import {Container} from 'flux/utils';
import CreateButtonStore from '../data/NavBar/CreateButtonStore';
import DropDownStore from '../data/NavBar/DropDownStore';
import AddStreamDialogStore from '../data/NavBar/AddStreamDialogStore';
import NavBarToo from "../views/NavBarToo";
import React from 'react';
import NavActions from '../data/NavBar/NavActions';

class NavBarContainer extends React.Component {

    static getStores() {
        return [DropDownStore, CreateButtonStore, AddStreamDialogStore]
    }

    static calculateState(prev) {
        return {
            viewModel: DropDownStore.getState(),
            createButtonShow: CreateButtonStore.getState(),
            addStreamDialogShow: false,
            createUserDialogShow: false,

            updateDropDown: NavActions.updateDropDown,

            toggleCreateButton: NavActions.toggleCreateButton,
            toggleCreateAccount: NavActions.toggleCreateAccount,
            toggleAddStreamDialog: NavActions.toggleAddStreamDialog
        };
    };

    render() {
        return <NavBarToo {...this.state} />
    }

}

export default Container.create(NavBarContainer);