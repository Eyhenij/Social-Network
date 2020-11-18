import React from 'react';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    showContacts,
    toggleIsFetching,
    unFollow
} from "../../redux/reducers/contactsReducer";
import {connect} from "react-redux";
import ContactsAPIContainer from "./contactsAPIContainer";


const mapStateToProps = (state) => {

    return {
        arrUsers: state.contactsPage.arrUsers,
        pageSize: state.contactsPage.pageSize,
        totalUsersCount: state.contactsPage.totalUsersCount,
        currentPage: state.contactsPage.currentPage,
        isFetching: state.contactsPage.isFetching

    }
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         showContacts: () => {
//             dispatch(showContactAC());
//         },
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unFollow: (id) => {
//             dispatch(unFollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//      }
// };

const ContactsContainer = connect(mapStateToProps, {
        showContacts,
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    }
)
(ContactsAPIContainer);

export default ContactsContainer;