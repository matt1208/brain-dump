import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, SimpleGrid } from "@chakra-ui/react"

const ToDoSkeleton = () => {
    return (
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
        </SimpleGrid>
    );
};

export default ToDoSkeleton;