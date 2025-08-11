import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

export const MainInfoBlock = memo(() => {
    return (
        <Box
            component="section"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingTop: { xs: '25px', sm: '50px' },
                paddingBottom: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >
            <Box
                sx={{
                    paddingBottom: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Круглосуточная помощь. Госпитализация без ожидания
                </Typography>

                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Пневмония у пожилых</Box> — это
                    опасное воспалительное заболевание лёгких, которое особенно тяжело протекает у пациентов старше
                    60–65 лет. Ослабленный иммунитет, хронические болезни и замедленные обменные процессы увеличивают
                    риск осложнений и смертности.
                </Typography>
                <Typography component="p"
                            sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--main-color)', marginTop: '10px' }}>
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Медицинская Сервисная
                        Компания</Box> организует платная госпитализация пожилых пациентов в
                    ведущие клиники Москвы, в том числе для лечения застойной пневмонии .

                </Typography>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Что такое застойная пневмония у пожилых?
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '20px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Застойная пневмония</Box> — это
                    форма воспаления лёгких, которая развивается на фоне длительного лежачего
                    положения и недостаточной вентиляции лёгких.
                    Чаще встречается у пациентов:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            После инсульта, инфаркта, травм
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            С хронической сердечной недостаточностью
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            При длительном пребывании в постели
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            color: 'var(--red)',
                            marginY: '20px',
                            fontSize: { xs: '20px', sm: '24px' },
                            fontWeight: 400
                        }}
                    >
                        Особенности:
                    </Typography>

                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Медленное начало, без выраженной температуры
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Одышка и слабость нарастают постепенно
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Возможен кашель с трудноотделяемой мокротой
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Высок риск дыхательной недостаточности
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Почему лечение пневмонии у пожилых требует госпитализации?
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Высокая вероятность осложнений: плеврит, абсцесс лёгкого, сепсис
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Необходимость круглосуточного наблюдения
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Подбор антибиотикотерапии с учётом возраста и сопутствующих заболеваний
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Оксигенотерапия, физиопроцедуры, дыхательная гимнастика
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box
                sx={{
                    paddingTop: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Как мы помогаем?
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--main-color)',
                        marginBottom: '15px',
                        fontSize: { xs: '20px', sm: '24px' },
                        fontWeight: 400
                    }}
                >
                    Наша компания организует:
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Экстренную и плановую госпитализацию в московские клиники без полиса ОМС
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Полное обследование: рентген/КТ лёгких, анализы, консультации специалистов
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Индивидуальный план лечения с контролем состояния
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Перевод из других регионов и СНГ, а также между клиниками
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            Патронаж и реабилитация после выписки
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    paddingTop: { xs: '25px', sm: '50px' },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'var(--red)',
                        marginBottom: '20px',
                        fontSize: { xs: '22px', sm: '34px' },
                        fontWeight: 300
                    }}
                >
                    Этапы лечения пневмонии у пожилых
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Диагностика</Box> — определение типа и стадии воспаления, исключение осложнений
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Медикаментозная терапия</Box> — антибиотики, противовоспалительные и муколитики
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Поддерживающая терапия</Box> — кислород, инфузии, витамины
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Физиотерапия и ЛФК</Box> — улучшение вентиляции лёгких, профилактика застойных явлений
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <LocalHospitalOutlinedIcon sx={{ color: 'var(--red)' }} />
                        <Typography
                            variant="h3"
                            sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                            <Box component="span" sx={{ color: 'var(--red)', fontWeight: 400 }}>Контроль и профилактика рецидивов</Box>
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
});
