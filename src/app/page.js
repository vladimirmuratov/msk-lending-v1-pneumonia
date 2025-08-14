import { Banner } from '@/components/Banner';
import { WhyWeBlock } from '@/components/WhyWeBlock';
import { WeRespondBlock } from '@/components/WeRespondBlock';
import { PartnersBlock } from '@/components/PartnersBlock';
import { ContactsBlock } from '@/components/ContactsBlock';
import { FormAction } from '@/components/FormAction';
import { MainInfoBlock } from '@/components/MainInfoBlock';
import { CoordinatorBlock } from '@/components/CoordinatorBlock';
import PhoneBlock from '@/components/PhoneBlock';

export default function Home() {
    return (
        <main style={{ position: 'relative' }}>
            <Banner />
            <PhoneBlock
                style={{
                    paddingTop: { xs: '50px', sm: '100px' },
                    paddingBottom: { xs: '50px', sm: '50px' },
                }}
                text='Ответим на любые вопросы по госпитализации и лечению. Звоните!'
            />
            {/*<CardsBlock />*/}
            <MainInfoBlock />
            {/*<AboutBlock />*/}
            <WhyWeBlock />
            <WeRespondBlock />
            {/*<WhatWeOfferBlock/>*/}
            {/*<DirectionsOfHospitalizationBlock />*/}
            {/*<BaseAccordion id="faq" title="Частые вопросы" items={faq} />*/}
            <CoordinatorBlock />
            <PartnersBlock />
            <PhoneBlock />
            {/*<BaseAccordion id="service" title="Услуги" items={services} />*/}
            {/*<TextBlock text={text1} />*/}
            <ContactsBlock />
            <FormAction />
        </main>
    );
}
