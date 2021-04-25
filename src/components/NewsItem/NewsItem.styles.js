import { Item } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledItem = styled(Item)`
    padding: 1rem !important;
    border: 1px solid #ccf2f4!important;
    border-radius: 3px !important;
    box-shadow: 0 6px 6px -6px #a4ebf3 !important;

    a:link, a:visited {
        text-decoration: none;
        color: #aaaaaa;
        cursor: pointer;
    }

    a:hover{
        text-decoration: underline;
    }
`;