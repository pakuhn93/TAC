import { gql } from '@apollo/client';

export const QUERY_MAGIC_ITEMS = gql`
    query Query {
        magicItems {
        _id
        attune
        category
        name
        page
        price
        rarity
        source
        }
    }
`;

export const QUERY_MAGIC_ITEM_SHOPS = gql`
    query Query {
        magicItemShops {
            _id
            createdOn
            shop {
                _id
                attune
                category
                name
                page
                price
                rarity
                source
            }
        }
    }
`;