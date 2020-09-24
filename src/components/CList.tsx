import React, {useEffect, useState} from 'react';

interface CListItem {
    hidden: boolean;
    content: string; // e.g.: 'Example Title|Example Subtitle'
}

interface CListProps {
    items: CListItem[];
}

interface MappedItem {
    title: string;
    subtitle: string;
}

export const CList = ({ items }: CListProps) => {
    const [listItems, setListItems] = useState<MappedItem[] | null>(null);

    useEffect(() => {
        setListItems(items.filter(({hidden}) => !hidden).map(({content}) => ({
            title: content.split('|')[0],
            subtitle: content.split('|')[1],
        })));
    }, [items]);

    return (
        <div className="container">
            {listItems?.map((listItem, index) => (
                <div className="list-item" key={index}>
                    <div className="list-item">{listItem.title}</div>
                    <div>{listItem.subtitle}</div>
                </div>
            ))}
        </div>

    )
}
