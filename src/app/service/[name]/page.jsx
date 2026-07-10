// Dynamic Router
"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react'
import NotFound from '@/app/not-found';
import ServicesData from '../../api/service.json'
import Loading from '@/app/loading';
import ServiceDetails from '../../components/common/serviceDetails'

function Page() {
    const params = useParams();
    // console.log(params);

    const [isPending, startTransition] = useTransition();
    const [service, setService] = useState();

    useEffect(() => {
        startTransition(() => {
            const serviceData = ServicesData.find(
                (item) => item.name === decodeURIComponent(params.name)
            );

            setService(serviceData);
            console.log(serviceData);
        })
    }, [params.name])

    if(isPending) {
        return <Loading/>
    }

    if(!service) {
        return <NotFound/>
    }

    return (
        <ServiceDetails service = {service} />
    )
}

export default Page;