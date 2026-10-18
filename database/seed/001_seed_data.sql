-- =========================================
-- Dream Sport Manouba - Seed Data
-- =========================================

-- Users (Admin)
INSERT INTO users (email, password, name, firstname, role, status)
VALUES
  ('admin@dreamsport.tn', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewKyNiVfFVMV8jW2', 'Admin', 'Dream', 'ADMIN', 'active');

-- Settings - General Info
INSERT INTO settings (key, value_fr, value_ar, value_type, description) VALUES
  ('site_name', 'Dream Sport Manouba', 'دريم سبورت منوبة', 'text', 'Nom du site'),
  ('address', 'Manouba, Tunis, Tunisie', 'منوبة، تونس', 'text', 'Adresse'),
  ('phone', '+216 00 000 000', '+216 00 000 000', 'text', 'Téléphone'),
  ('email', 'contact@dreamsport.tn', 'contact@dreamsport.tn', 'text', 'Email de contact'),
  ('whatsapp', '21600000000', '21600000000', 'text', 'Numéro WhatsApp'),
  ('google_maps_url', 'https://maps.google.com/?q=Manouba+Tunis+Tunisie', 'https://maps.google.com/?q=Manouba+Tunis+Tunisie', 'text', 'Lien Google Maps'),
  ('opening_hours_mf_fr', 'Lundi – Vendredi', 'الاثنين – الجمعة', 'text', 'Horaires Lun-Ven FR'),
  ('opening_hours_mf_ar', 'الاثنين – الجمعة', 'الاثنين – الجمعة', 'text', 'Horaires Lun-Ven AR'),
  ('opening_hours_mf_time', '06:00 – 22:00', '06:00 – 22:00', 'text', 'Heures Lun-Ven'),
  ('opening_hours_sat_fr', 'Samedi', 'السبت', 'text', 'Samedi FR'),
  ('opening_hours_sat_ar', 'السبت', 'السبت', 'text', 'Samedi AR'),
  ('opening_hours_sat_time', '07:00 – 20:00', '07:00 – 20:00', 'text', 'Heures Samedi'),
  ('opening_hours_sun_fr', 'Dimanche', 'الأحد', 'text', 'Dimanche FR'),
  ('opening_hours_sun_ar', 'الأحد', 'الأحد', 'text', 'Dimanche AR'),
  ('opening_hours_sun_time', '08:00 – 14:00', '08:00 – 14:00', 'text', 'Heures Dimanche'),
  ('logo_url', '/images/logo.png', '/images/logo.png', 'text', 'Logo'),
  ('favicon_url', '/favicon.ico', '/favicon.ico', 'text', 'Favicon');

-- Social Links
INSERT INTO social_links (platform, url, icon, status) VALUES
  ('facebook', 'https://facebook.com', 'facebook', 'active'),
  ('instagram', 'https://instagram.com', 'instagram', 'active'),
  ('tiktok', 'https://tiktok.com', 'tiktok', 'active'),
  ('youtube', 'https://youtube.com', 'youtube', 'active'),
  ('whatsapp', 'https://wa.me/21600000000', 'whatsapp', 'active');

-- Activities
INSERT INTO activities (name_fr, name_ar, description_fr, description_ar, level, duration, category, status) VALUES
  ('Taekwondo', 'التايكوندو', 'Art martial coréen alliant technique, discipline et respect.', 'فن قتالي كوري يجمع بين التقنية والانضباط والاحترام.', 'allLevels', 60, 'martial-arts', 'active'),
  ('Karaté', 'الكاراتيه', 'Développez votre force mentale et physique.', 'طور قوتك العقلية والبدنية.', 'allLevels', 60, 'martial-arts', 'active'),
  ('Boxe', 'الملاكمة', 'Cardio intense et technique de frappe.', 'تمارين قلبية مكثفة وتقنيات الضرب.', 'allLevels', 60, 'martial-arts', 'active'),
  ('Kickboxing', 'الكيك بوكسينغ', 'Puissance, agilité et endurance.', 'القوة والرشاقة والتحمل.', 'allLevels', 60, 'martial-arts', 'active'),
  ('Musculation', 'كمال الأجسام', 'Développez votre force et votre musculature.', 'طور قوتك وعضلاتك.', 'allLevels', 90, 'fitness', 'active'),
  ('Fitness', 'اللياقة البدنية', 'Séances dynamiques pour tous les niveaux.', 'حصص حيوية مناسبة لجميع المستويات.', 'allLevels', 60, 'fitness', 'active'),
  ('Pilates', 'البيلاتيس', 'Renforcez votre corps et améliorez votre posture.', 'قوي جسمك وحسن وضعيتك.', 'allLevels', 60, 'wellness', 'active'),
  ('TRX', 'TRX', 'Entraînement en suspension fonctionnel.', 'تمارين تعليق وظيفية.', 'allLevels', 45, 'fitness', 'active'),
  ('Running', 'الجري', 'Améliorez votre endurance et votre cardio.', 'حسن تحملك وقدرتك القلبية.', 'allLevels', 60, 'cardio', 'active'),
  ('HYROX', 'HYROX', 'Compétition de fitness fonctionnel mondiale.', 'مسابقة لياقة وظيفية عالمية.', 'intermediate', 60, 'functional', 'active'),
  ('Cross Training', 'التدريب المتقاطع', 'Entraînement varié et complet.', 'تمارين متنوعة وشاملة.', 'allLevels', 60, 'functional', 'active'),
  ('Personal Training', 'تدريب شخصي', 'Coaching personnalisé 100% adapté à vos objectifs.', 'تدريب شخصي مخصص بالكامل لأهدافك.', 'allLevels', 60, 'personal', 'active');

-- Coaches
INSERT INTO coaches (name, speciality, bio_fr, bio_ar, experience, status) VALUES
  ('Ahmed Ben Ali', 'Coach Boxe & Kickboxing', 'Coach passionné spécialisé en boxe et kickboxing.', 'مدرب شغوف متخصص في الملاكمة والكيك بوكسينغ.', '8 ans', 'active'),
  ('Youssef Trabelsi', 'Coach Taekwondo & Karaté', 'Maître d''arts martiaux avec de nombreuses années d''expérience.', 'أستاذ فنون قتالية ذو خبرة طويلة.', '10 ans', 'active'),
  ('Karim Mansouri', 'Personal Trainer & Musculation', 'Spécialisé en musculation et coaching personnalisé.', 'متخصص في كمال الأجسام والتدريب الشخصي.', '7 ans', 'active'),
  ('Salma Bouzid', 'Coach Fitness & Pilates', 'Coach dynamique spécialisée en fitness et pilates.', 'مدربة ديناميكية متخصصة في اللياقة والبيلاتيس.', '5 ans', 'active');

-- Subscription Plans
INSERT INTO subscriptions (name_fr, name_ar, description_fr, description_ar, price, duration, services_fr, services_ar, status) VALUES
  ('Basic', 'أساسي', 'Formule d''entrée pour commencer à s''entraîner', 'باقة مناسبة للمبتدئين', 150.000, 1, 
   ARRAY['Accès salle', 'Musculation', 'Cardio', 'Vestiaires'],
   ARRAY['الدخول إلى الصالة', 'كمال الأجسام', 'تمارين قلبية', 'غرف الملابس'],
   'active'),
  ('Premium', 'ممتاز', 'Formule complète avec cours collectifs', 'باقة شاملة مع الدروس الجماعية', 250.000, 3,
   ARRAY['Accès salle', 'Cours collectifs', 'Musculation', 'Cardio', 'Vestiaires', 'Suivi basique'],
   ARRAY['الدخول إلى الصالة', 'دروس جماعية', 'كمال الأجسام', 'تمارين قلبية', 'غرف الملابس', 'متابعة بسيطة'],
   'active'),
  ('VIP', 'في آي بي', 'Formule premium avec coaching personnalisé', 'باقة مميزة مع تدريب شخصي كامل', 400.000, 6,
   ARRAY['Accès complet', 'Cours collectifs', 'Musculation', 'Cardio', 'Coaching personnalisé', 'Suivi personnalisé', 'Programme sur-mesure', 'Vestiaires premium'],
   ARRAY['دخول كامل', 'دروس جماعية', 'كمال الأجسام', 'تمارين قلبية', 'تدريب شخصي', 'متابعة شخصية', 'برنامج مخصص', 'غرف ملابس مميزة'],
   'active');

-- Classes/Schedules (Exemple)
INSERT INTO classes (activity_id, coach_id, day, start_time, end_time, room, level, capacity, status)
SELECT 
  a.id,
  c.id,
  'monday',
  '17:00',
  '18:00',
  'Salle 1',
  'beginner',
  20,
  'active'
FROM activities a, coaches c
WHERE a.name_fr = 'Taekwondo' AND c.name = 'Youssef Trabelsi';

INSERT INTO classes (activity_id, coach_id, day, start_time, end_time, room, level, capacity, status)
SELECT 
  a.id,
  c.id,
  'wednesday',
  '17:00',
  '18:00',
  'Salle 1',
  'intermediate',
  15,
  'active'
FROM activities a, coaches c
WHERE a.name_fr = 'Taekwondo' AND c.name = 'Youssef Trabelsi';

INSERT INTO classes (activity_id, coach_id, day, start_time, end_time, room, level, capacity, status)
SELECT 
  a.id,
  c.id,
  'saturday',
  '10:00',
  '11:30',
  'Salle 1',
  'allLevels',
  20,
  'active'
FROM activities a, coaches c
WHERE a.name_fr = 'Taekwondo' AND c.name = 'Youssef Trabelsi';

INSERT INTO classes (activity_id, coach_id, day, start_time, end_time, room, level, capacity, status)
SELECT 
  a.id,
  c.id,
  'tuesday',
  '18:00',
  '19:00',
  'Salle 2',
  'allLevels',
  12,
  'active'
FROM activities a, coaches c
WHERE a.name_fr = 'Boxe' AND c.name = 'Ahmed Ben Ali';

INSERT INTO classes (activity_id, coach_id, day, start_time, end_time, room, level, capacity, status)
SELECT 
  a.id,
  c.id,
  'thursday',
  '18:00',
  '19:00',
  'Salle 2',
  'intermediate',
  12,
  'active'
FROM activities a, coaches c
WHERE a.name_fr = 'Boxe' AND c.name = 'Ahmed Ben Ali';

-- Reviews (Approved examples)
INSERT INTO reviews (name, rating, comment, status) VALUES
  ('Amine B.', 5, 'Excellente salle ! Les coachs sont très professionnels et l''ambiance est super motivante. Je recommande vivement !', 'approved'),
  ('Sarah M.', 5, 'J''adore cette salle ! Les cours collectifs sont géniaux et les équipements sont neufs. Un vrai plaisir de venir s''entraîner !', 'approved'),
  ('Omar T.', 5, 'Super accueil, coachs à l''écoute et très pédagogues. J''ai fait de gros progrès en peu de temps. Merci Dream Sport !', 'approved');

-- Promotions
INSERT INTO promotions (title_fr, title_ar, description_fr, description_ar, original_price, promo_price, start_date, end_date, status) VALUES
  ('Offre Rentrée', 'عرض العودة للدراسة', 'Profitez de -20% sur votre abonnement 3 mois à la rentrée !', 'استفد بخصم 20% على اشتراك 3 أشهر مع العودة للدراسة!', 250.000, 200.000, CURRENT_DATE, CURRENT_DATE + INTERVAL '30 days', 'active');
