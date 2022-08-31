import { useState, memo} from 'react';
import PropTypes from 'prop-types';

import { Form } from './SearchForm.styled';

const SearchForm = ({setParams})=>{
    const [query, setQuery] = useState(()=>"");
    

        const handleSubmit = e => {
            e.preventDefault();
            setParams(query);
            setQuery("");
        };

        return (
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e=>setQuery(e.currentTarget.value)}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button 
                    type='submit' 
                    name="contacts" 
                    >Search
                </button>
            </Form>
        );
};

export default memo(SearchForm);

SearchForm.propTypes={
    setParams: PropTypes.func.isRequired,
}
