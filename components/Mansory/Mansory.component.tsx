"use client"

import { useEffect, useState } from "react";
import { IItem, IMansoryProps } from "./Mansory.types";
import { Image, MansoryContainer, MansoryItem } from "./Mansory.styled";

export function Mansory<T extends IItem>({ column, gap, items }: IMansoryProps<T>) {
    const [mansoryList, setMansoryList] = useState<T[][]>([])

    useEffect(() => {
        const tempList: T[][] = []

        for (let i = 0; i < column; i++) {
            tempList.push([] as T[])
        }

        for (let i = 0; i < items.length; i++) {
            tempList[i % column].push(items[i])
        }

        setMansoryList(tempList)
    }, [column, items])

    return (
        <MansoryContainer column={column} gap={gap}>
            {mansoryList.map((mansory, idx) => (
                <MansoryItem
                    gap={gap}
                    key={idx}
                >
                    {mansory.map(item => (
                        <Image
                            fill
                            key={item.id}
                            src={item.url}
                            alt={item.alt}
                        />
                    ))}
                </MansoryItem>
            ))}
        </MansoryContainer>
    )
}