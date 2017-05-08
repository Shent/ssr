import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
    render() {
        const filteredContacts = this.props.contacts.filter(contact =>
            contact.name.indexOf(this.props.filterText) !== -1
        );

        return (
            <ul>
                {filteredContacts.map(contact =>
                    <li key={contact.email}>
                        {contact.name} - {contact.email}
                    </li>
                )}
            </ul>
        );
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired
};
