(function () {
    'use strict';
    var module = angular.module('app', ['onsen']);
    var url = "http://daredot.dev.thickmug.com";
    var currentApiKey;
    var timeinterval = 0;


     var l_lang;
        if (navigator.userLanguage) // Explorer
            l_lang = navigator.userLanguage;
        else if (navigator.language) // FF
            l_lang = navigator.language;
        else
            l_lang = "en";
    
    module.controller('AppController', function ($scope, $projekty, $filter) {
        $scope.currentPage = "Home";
$scope.detectLang = l_lang;

        $scope.langen = {
            active_tasks: 'Active',
            ended_tasks: 'Finished',
            name: 'First name',
            last_name: 'Last name',
            party: 'Party',
            culture_and_history: 'Culture and history',
            entertainment: 'Entertainment',
            sport: 'Sport',
            touristics: 'Tourism',
            select_category: 'select challenge category that you are interested in',
            task_task: 'zadanie',
            game_invitation: 'Game invitation:',
            notifications: 'notifications',
            compare_players: 'compare players',
            players_list: 'lista graczy',
            show_players_list: 'show players list',
            whites: 'whites',
            blacks: 'blacks',
            no_games_in_category: 'No challenges in this category',
            localization: 'Localization',
            app_name: 'Daredot',
            hello_world: 'Hello world!',
            action_settings: 'Settings',
            drawer_open: '',
            drawer_close: '',
            transition_name_namefield: 'transition:NAMEFIELD',
            transition_name_passfield: 'transition:PASSFIELD',
            transition_name_button: 'transition:BUTTON',
            transition_name_logo: 'transition:LOGO',
            transition_name_fab: 'transition:FAB',
            transition_name_fab2: 'transition:FAB2',
            hello_blank_fragment: 'Hello blank fragment',
            button_text_logout: 'logout',
            menu_text_home: 'home',
            menu_text_challenges: 'your challenges',
            menu_text_new_challenge: 'new challenge',
            menu_text_statistics: 'statistics',
            menu_text_friends: 'friends',
            menu_text_qrcode_scanner: 'qrcode scanner',
            menu_text_settings: 'settings',
            home_text_challenges_done: 'completed\nchallenges',
            home_badges1: 'claimed',
            home_badges2: 'badges',
            home_challanges_created: 'created\nchallenges',
            home_text_show_all_challanges: 'all active challenges',
            home_text_last_challenge: 'LAST CHALLENGE',
            login_text_name: 'User name',
            login_text_password: 'password',
            login_text_login: 'log in',
            login_text_or: 'or',
            login_text_create_account: 'create new account',
            login_text_forgotten_password: 'forgot your password?',
            login_text_bad_credentials: 'Login or password is invalid!',
            login_text_no_account: 'Login or password is invalid!',
            create_account_text_email: 'E-mail',
            create_account_text_create_account: 'Create new account and log in',
            create_account_text_name_taken: 'That username is already taken!',
            create_account_text_fields_required: 'All fields are required!',
            create_account_text_mail_taken: 'That email is already taken!',
            create_account_text_creating_account: 'Creating in progress...',
            password_text_description: 'If you forgot your password, type your e-mail address that you provided at registration and we\'ll send you an email with new password!',
            password_text_email_hint: 'your e-mail',
            password_text_reset_password: 'reset password',
            settings_text_username: 'Username',
            settings_text_username_dummy: 'user',
            settings_text_new_password: 'New password',
            settings_text_confirm_new_password: 'Retype new password',
            settings_text_set_avatar: 'Set avatar',
            settings_text_save_settings: 'save settings',
            settings_text_password_mismatch: 'Passwords do not match!',
            settings_text_settings_saved: 'SETTINGS SAVED!',
            image_chooser_text_camera: 'CAMERA',
            image_chooser_text_gallery: 'GALLERY',
            settings_text_settings_not_saved: 'Error! Settings hasn\'t been saved!',
            friends_profile_text_remove_friend: 'remove friend',
            friends_profile_text_last_badges: 'LAST BADGES',
            statistics_text_badges: 'CLAIMED BADGES',
            new_challenge_text_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tempus nulla. Donec tincidunt mollis odio sed ultrices. Integer non facilisis nibh. Integer et lacus a urna laoreet tincidunt quis in metus.',
            new_challenge_text_select_challenges: 'select challenge set',
            new_challenge_text_create_new_set: 'new challenge set',
            new_challenge_text_join_via_nfc: 'join via NFC',
            challenge_set_text_show_ranking: 'show leaderbords',
            challenge_set_text_ar_mode: 'AR mode',
            task_text_verify: 'verify',
            task_text_omit: 'skip this challenge ($0.99)',
            tasks_text_do_task: 'COMPLETE 3 TASKS',
            task_text_complete: 'COMPLETE ',
            tasks_text_tasks: '" TASKS"',
            challenge_full_text_end_date: '"ends in: "',
            notification_text_invitation: '"\ninvites you to friends!"',
            notification_text_invitation_accepted: '"\naccepted your invitation!"',
            notification_text_challenge_done: 'Challenge completed\nYour rank:',
            notification_text_badge: 'Badge claimed:',
            notifications_text_user_done_challenge: '" completed challenge"',
            nfc_text_tap_to_connec: 'Tap the screen to connect',
            category_text_touristics: 'Touristics',
            category_text_culture_history: 'Culture and History',
            category_text_entertainment: 'Entertainment',
            category_text_party: 'Party',
            category_text_sport: 'Sport',
            challenge_join_text_join: 'Join Challenge set',
            new_step1_text_settings: 'Settings',
            step2_text_next_step_gamers: 'next step - players',
            step2_text_tasks: 'Tasks',
            step2_text_add_task: 'add task',
            step1_text_set_name: 'Set name',
            step1_text_public: 'Public',
            step1_text_teams: 'Teams',
            step1_text_category: 'Category',
            step1_text_date_end: 'End date',
            step1_text_next_step_tasks: 'next step - tasks',
            step1_text_set: 'set',
            step2_text_add_tasks_desc: 'Add new tasks to set',
            task_category_places: 'Places',
            task_category_photos: 'Photos',
            task_category_distance: 'Distance',
            task_category_checklist: 'Checklist',
            new_task_text_new_task: 'New Tasks',
            new_task_text_description: 'Task description',
            new_task_place_text_place_name: 'Place name',
            new_task_place_text_description: 'Description after reaching the point',
            new_task_text_photo_count: 'Photo quantity',
            new_task_text_distance: 'Distance',
            new_task_text_task_list: 'Task list',
            new_task_text_places_list: 'Places list',
            step3_text_players: 'Players',
            step3_text_add_players: 'add players',
            step3_text_add_via_NFC: 'add via NFC',
            step3_text_create_set_Text: 'create task set',
            home_text_add_new_challenge: 'create new challenge',
            new_challenge_step1_text_set_description: 'Set description',
            new_challenge_step1_text_upload_failed: 'Sending a challenge failed. Please check and try again!!',
            step2_text_error_challenge_try_again: 'An error occurred! Please create Challenge again.',
            friend_profile_text_profile_doesnt_exist: 'Error! Profile does not exist!',
            add_friend_text: 'add friends',
            friendst_list_text_no_friends: 'No friends. Add them first.',
            friend_profile_text_invite_sent: 'Invitation sent! After accepting - this person will appear on your friendslist.',
            friend_profile_text_user_doesnt_exist: 'User does not exist!',
            friend_profile_text_inivte_already_sent: 'Invitation has been already sent. Wait for an acceptance.',
            friend_profile_text_waiting_acceptation: 'waiting for acceptance',
            notifications_text_no_notifications: 'You have no notifications.',
            friend_profile_text_accept_invitation: 'Accept invitation',
            step3_text_assigninig_failed: 'Assigning friends failed! Try again!',
            step2_text_publish_failed: 'Task can\'t be saved! Try again!',
            challenge_team_name_white: 'Arnold destroys',
            challenge_team_name_black: 'black',
            photo_Fragment_text_add_photo: 'Add photo',
            category_select_text_touristics: 'Touristics',
            challenge_join_text_challenge_missing: 'This set does not exist! Select another one!',
            challenge_search_text_no_games_in_this_category: 'No games found. Select another category!!',
            task_text_photos: '" PHOTOS"',
            task_text_add: '"ADD "',
            task_text_beat_the_distance: 'BEAT THE DISTANCE',
            task_text_visit: '"VISIT "',
            task_text_places: '" PLACES"',
            task_text_start: 'start',
            task_text_save_photos: 'save photos',
            task_text_save_checklist: 'save checklist',
            your_challenges_text_no_games: 'No games. Join another game or create new one',
            task_text_stop_tracking: 'stop',
            task_text_start_tracking: 'start',
            compare_text_show_profile: 'add a rival to friends',
            ar_text_show_players: 'other players',
            ar_text_show_waypoints: 'waypoints',
            ar_text_show_landscape: 'landscape',
            waypoint_dialog_text_name_point: 'Waypoint name:',
            waypoint_dialog_text_desc: 'Waypoint description:',
            waypoint_dialog_text_OK: 'OK',
            task_text_awiting_verification: 'awaiting for verification',
            notification_text_player_finished_task: 'Player finished a Task',
            verification_text_failure: 'Verification failed! try again!',
            task_activity_text_task_completed_and_verified: 'Finished and Verified',
            challenge_fragment_text_multiplayer: 'multiplayer\ngame',
            challenge_join_text_join_white_team: 'join white team',
            challenge_join_text_join_black_team: 'join black team',
            challenge_join_text_unable_to_join: 'unable to join!',
            nfc_share_text_invite_players_via_nfc: 'invite via NFC',
            notification_text_player: '"Player "',
            notification_text_invited_you_to_game: '" invited you to game!"',
            text_difficulty: 'difficulty',
            error_no_sim_or_gps: 'To use this app make sure you have GPS on and good network signal.',
            title_activity_account_settings: 'Account Settings',
            title_activity_qrcode_scanner: 'QR-Code Scanner',
            title_activity_friend_profile: 'Friend Profile',
            no_players_error: 'Sorry! There are no players playing this game!',
            timer_until: '"till end: "',
            badge1name: 'Piece of cake!',
            badge2name: 'Healthy\n',
            badge3name: 'Traveller\n',
            badge4name: 'Papparazzi\n',
            badge5name: '10 in a row!',
            badge6name: 'Creator!\n',
            badge8name: 'Historian\n',
            badge7name: 'Teamwork',
            badge9name: 'Tourist\n',
            badge10name: 'Rockstar\n',
            badge11name: 'Party\nanimal',
            badge12name: 'Athlete\n',
            badge1_text: 'Finish your first challenge',
            badge2_text: 'Beat distance of 100km',
            badge3_text: 'Visit 10 places',
            badge4_text: 'Take 10 photos',
            badge5_text: 'Play 10 challenges',
            badge6_text: 'Create a challenge',
            badge7_text: 'Win challenge playing with your team',
            badge8_text: 'Play a challenge of culture and history category',
            badge9_text: 'Play a challenge of tourism category',
            badge10_text: 'Play a challenge of entertainment category',
            badge11_text: 'Play a challenge of party category',
            badge12_text: 'Play a challenge of sport category'
        }

        $scope.langde = {
            active_tasks: 'Aktiv',
            ended_tasks: 'Fertig',
            name: 'Vorname',
            last_name: 'Nachname',
            party: 'Party',
            culture_and_history: 'Kultur und Geschichte',
            entertainment: 'Unterhaltung',
            sport: 'Sport',
            touristics: 'Tourismus',
            select_category: 'Wählen Sie Herausforderung Kategorie, die Sie interessiert sind',
            task_task: 'Aufgabe',
            game_invitation: 'Spiel Einladung',
            notifications: 'Benachrichtigungen',
            compare_players: 'vergleichen Spieler',
            players_list: 'Spielerliste',
            show_players_list: 'Show Spielerliste',
            whites: 'Weiße',
            blacks: 'Schwarze',
            no_games_in_category: 'Keine Spiele in dieser Kategorie',
            localization: 'Lokalisierung',
            app_name: 'Daredot',
            hello_world: 'Hallo Welt!',
            action_settings: 'Einstellungen',
            drawer_open: '',
            drawer_close: '',
            transition_name_namefield: 'transition:NAMEFIELD',
            transition_name_passfield: 'transition:PASSFIELD',
            transition_name_button: 'transition:BUTTON',
            transition_name_logo: 'transition:LOGO',
            transition_name_fab: 'transition:FAB',
            transition_name_fab2: 'transition:FAB2',
            hello_blank_fragment: 'Hallo blank fragment',
            button_text_logout: 'Ausloggen',
            menu_text_home: 'home',
            menu_text_challenges: 'ihre Herausforderungen',
            menu_text_new_challenge: 'neue Herausforderung',
            menu_text_statistics: 'statistiken',
            menu_text_friends: 'freunde',
            menu_text_qrcode_scanner: 'qrcode scanner',
            menu_text_settings: 'settings',
            home_text_challenges_done: 'abgeschlossen\nherausforderungen',
            home_badges1: 'behauptete',
            home_badges2: 'Abzeichen',
            home_challanges_created: 'erstellt\nherausforderungen',
            home_text_show_all_challanges: 'alle aktiven Herausforderungen',
            home_text_last_challenge: 'LETZTE HERAUSFORDERUNG',
            login_text_name: 'benutzername',
            login_text_password: 'passwort',
            login_text_login: 'einloggen',
            login_text_or: 'oder',
            login_text_create_account: 'neuen account erstellen',
            login_text_forgotten_password: 'haben sie ihr passwort vergessen?',
            login_text_bad_credentials: 'Login oder passwort ist ungültig!',
            login_text_no_account: 'Login oder passwort ist ungültig!',
            create_account_text_email: 'E-mail',
            create_account_text_create_account: 'neues konto erstellen und login',
            create_account_text_name_taken: 'dieser benutzername ist bereits vergeben!',
            create_account_text_fields_required: 'alle felder sind erforderlich!',
            create_account_text_mail_taken: 'diese email ist bereits vergeben!',
            create_account_text_creating_account: 'Erstellen läuft ...',
            password_text_description: 'Wenn Sie Ihr Passwort vergessen haben, geben Sie Ihre E-Mail-Adresse, die Sie bei der Registrierung zur Verfügung gestellt, und wir werden Ihnen eine E-Mail mit neues Passwort zusenden!',
            password_text_email_hint: 'deine e-mail',
            password_text_reset_password: 'reset password',
            settings_text_username: 'passwort zurücksetzen',
            settings_text_username_dummy: 'benutzer',
            settings_text_new_password: 'neues kennwort',
            settings_text_confirm_new_password: 'neues passwort',
            settings_text_set_avatar: 'set benutzerbild',
            settings_text_save_settings: 'einstellungen speichern',
            settings_text_password_mismatch: 'passwörter stimmen nicht überein!',
            settings_text_settings_saved: 'EINSTELLUNGEN GESPEICHERT!',
            image_chooser_text_camera: 'KAMERA',
            image_chooser_text_gallery: 'GALERIE',
            settings_text_settings_not_saved: 'Fehler! Einstellungen wurde nicht gespeichert!',
            friends_profile_text_remove_friend: 'freund entfernen',
            friends_profile_text_last_badges: 'LETZTE ABZEICHEN',
            statistics_text_badges: 'BEANSPRUCHT BADGES',
            new_challenge_text_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tempus nulla. Donec tincidunt mollis odio sed ultrices. Integer non facilisis nibh. Integer et lacus a urna laoreet tincidunt quis in metus.',
            new_challenge_text_select_challenges: 'wählen sie anstehende Herausforderung',
            new_challenge_text_create_new_set: 'new challenge set',
            new_challenge_text_join_via_nfc: 'neue Herausforderung set',
            challenge_set_text_show_ranking: 'show leaderbords',
            challenge_set_text_ar_mode: 'AR mode',
            task_text_verify: 'überprüfen',
            task_text_omit: 'überspringen diese Herausforderung ($0.99)',
            tasks_text_do_task: 'KOMPLETT 3 AUFGABEN',
            task_text_complete: 'KOMPLETT ',
            tasks_text_tasks: ' AUFGABEN',
            challenge_full_text_end_date: 'endet in: ',
            notification_text_invitation: '"\lädt Sie zu freunden!"',
            notification_text_invitation_accepted: '"\akzeptierte die einladung!"',
            notification_text_challenge_done: 'Herausforderung abgeschlossen\nDein Rang:',
            notification_text_badge: 'Abzeichen Anspruch:',
            notifications_text_user_done_challenge: '" abgeschlossen Herausforderung"',
            nfc_text_tap_to_connec: 'Tippen Sie auf den Bildschirm zu verbinden',
            category_text_touristics: 'Touristics',
            category_text_culture_history: 'Kultur und Geschichte',
            category_text_entertainment: 'Unterhaltung',
            category_text_party: 'Party',
            category_text_sport: 'Sport',
            challenge_join_text_join: 'Join herausfordern',
            new_step1_text_settings: 'Einstellungen',
            step2_text_next_step_gamers: 'nächste Schritt - Spieler',
            step2_text_tasks: 'Aufgaben',
            step2_text_add_task: 'hinzufügen Aufgabe',
            step1_text_set_name: 'Name einsetzen',
            step1_text_public: 'Öffentlichkeit',
            step1_text_teams: 'Teams',
            step1_text_category: 'Kategorie',
            step1_text_date_end: 'Enddatum',
            step1_text_next_step_tasks: 'nächsten Schritt - Aufgaben',
            step1_text_set: 'set',
            step2_text_add_tasks_desc: 'Fügen Sie neue Aufgaben einstellen',
            task_category_places: 'Setzt',
            task_category_photos: 'Fotos',
            task_category_distance: 'Entfernung',
            task_category_checklist: 'Kontroll-Liste',
            new_task_text_new_task: 'Neue Aufgaben',
            new_task_text_description: 'Aufgabenbeschreibung',
            new_task_place_text_place_name: 'Ortsname',
            new_task_place_text_description: 'Beschreibung nach der Punkt erreicht',
            new_task_text_photo_count: 'Foto Menge',
            new_task_text_distance: 'Entfernung',
            new_task_text_task_list: 'Aufgabenliste',
            new_task_text_places_list: 'Orte Liste',
            step3_text_players: 'spieler',
            step3_text_add_players: 'add-Spieler',
            step3_text_add_via_NFC: 'addieren über NFC',
            step3_text_create_set_Text: 'erstellen gestellte Aufgabe',
            home_text_add_new_challenge: 'schaffen neue Herausforderung',
            new_challenge_step1_text_set_description: 'Set Beschreibung',
            new_challenge_step1_text_upload_failed: 'eine Herausforderung Senden fehlgeschlagen. Bitte überprüfen und versuchen Sie es erneut!!',
            step2_text_error_challenge_try_again: 'Ein Fehler ist aufgetreten! Bitte erstellen Herausforderung wieder.',
            friend_profile_text_profile_doesnt_exist: 'Fehler! Profil existiert nicht!',
            add_friend_text: 'freunde hinzufügen',
            friendst_list_text_no_friends: 'Keine Freunde. Fügen Sie diese zuerst.',
            friend_profile_text_invite_sent: 'Einladung versendet! Nach der Übernahme - wird diese Person auf Ihrer Freundesliste erscheinen.',
            friend_profile_text_user_doesnt_exist: 'Benutzer existiert nicht!',
            friend_profile_text_inivte_already_sent: 'Die Einladung wurde bereits gesendet. Warten Sie auf eine Annahme.',
            friend_profile_text_waiting_acceptation: 'warten auf die annahme',
            notifications_text_no_notifications: 'Sie haben keine Benachrichtigungen.',
            friend_profile_text_accept_invitation: 'Die Einladung annehmen',
            step3_text_assigninig_failed: 'Zuweisen von Freunden fehlgeschlagen! Versuch es noch einmal!',
            step2_text_publish_failed: 'Aufgabe kann nicht gespeichert werden! Versuch es noch einmal!',
            challenge_team_name_white: 'Arnold zerstört',
            challenge_team_name_black: 'schwarz',
            photo_Fragment_text_add_photo: 'Foto hinzufügen',
            category_select_text_touristics: 'Touristics',
            challenge_join_text_challenge_missing: 'Dieser Satz ist nicht vorhanden! Wählen Sie eine andere!',
            challenge_search_text_no_games_in_this_category: 'Keine Spiele gefunden. andere Kategorie wählen !!',
            task_text_photos: '" FOTOS"',
            task_text_add: '"HINZUFÜGEN "',
            task_text_beat_the_distance: 'BEAT DER ABSTAND',
            task_text_visit: '"BESUCH "',
            task_text_places: '" SETZT"',
            task_text_start: 'anfang',
            task_text_save_photos: 'speichern fotos',
            task_text_save_checklist: 'save checkliste',
            your_challenges_text_no_games: 'Keine Spiele. Registriert ein anderes Spiel oder erstellen Sie neue',
            task_text_stop_tracking: 'halt',
            task_text_start_tracking: 'anfang',
            compare_text_show_profile: 'einen rivalen zu freunden hinzufügen',
            ar_text_show_players: 'andere spieler',
            ar_text_show_waypoints: 'wegpunkte',
            ar_text_show_landscape: 'landschaft',
            waypoint_dialog_text_name_point: 'Waypoint name:',
            waypoint_dialog_text_desc: 'Waypoint Beschreibung:',
            waypoint_dialog_text_OK: 'OK',
            task_text_awiting_verification: 'Warten auf Überprüfung',
            notification_text_player_finished_task: 'Spieler beendet eine Aufgabe',
            verification_text_failure: 'Verifizierung fehlgeschlagen! Versuch es noch einmal!',
            task_activity_text_task_completed_and_verified: 'Fertige und verifizierte',
            challenge_fragment_text_multiplayer: 'multiplayer\nspiel',
            challenge_join_text_join_white_team: 'beitreten weisse Team',
            challenge_join_text_join_black_team: 'join black team',
            challenge_join_text_unable_to_join: 'beitreten schwarz-Team!',
            nfc_share_text_invite_players_via_nfc: 'laden via NFC',
            notification_text_player: '"Spieler "',
            notification_text_invited_you_to_game: '" Sie eingeladen, zum Spiel!"',
            text_difficulty: 'Sie eingeladen, zum Spiel',
            error_no_sim_or_gps: 'Zur Nutzung dieser App sicherstellen, dass Sie GPS auf und gutes Netzwerk Signal haben.',
            title_activity_account_settings: 'Einstellungen',
            title_activity_qrcode_scanner: 'Scanner QR-Code',
            title_activity_friend_profile: 'Profil eines Freundes',
            no_players_error: 'Es tut uns leid! Es sind keine Spieler dieses Spiel zu spielen!',
            timer_until: '"bis zum Ende: "',
            badge1name: 'Stück Kuchen!',
            badge2name: 'Gesund\n',
            badge3name: 'Reisenden\n',
            badge4name: 'Papparazzi\n',
            badge5name: '10 in einer Reihe!',
            badge6name: 'Schöpfer!\n',
            badge8name: 'Historiker\n',
            badge7name: 'Zusammenspiel',
            badge9name: 'Tourist\n',
            badge10name: 'Rockstar\n',
            badge11name: 'Party-Tier',
            badge12name: 'Athlet',
            badge1_text: 'Beenden Sie Ihre erste Herausforderung',
            badge2_text: 'Schlagen Entfernung von 100 km',
            badge3_text: 'Besuchen Sie 10 Plätze',
            badge4_text: 'Nehmen Sie sich 10 Fotos',
            badge5_text: 'Spielen Sie 10 Herausforderungen',
            badge6_text: 'Erstellen Sie eine Herausforderung',
            badge7_text: 'Win Herausforderung spielen mit Ihrem Team',
            badge8_text: 'Spielen Sie eine Herausforderung, Kultur und Geschichte Kategorie',
            badge9_text: 'Spielen Sie eine Herausforderung der Kategorie Tourismus',
            badge10_text: 'Spielen Sie eine Herausforderung der Unterhaltung Kategorie',
            badge11_text: 'Spielen Sie eine Herausforderung der Partei Kategorie',
            badge12_text: 'Spielen Sie eine Herausforderung der Kategorie Sport'
        }

        $scope.langpl = {
            active_tasks: 'Aktywne',
            ended_tasks: 'Ukończone',
            name: 'Imię',
            last_name: 'Nazwisko',
            party: 'Impreza',
            culture_and_history: 'Kultura i historia',
            entertainment: 'Rozrywka',
            sport: 'Sport',
            touristics: 'Turystyka',
            select_category: 'Wybierz interesującą Cię kategorie wyzwań',
            task_task: 'zadanie',
            game_invitation: 'Zaproszenie do zestawu:',
            notifications: 'notyfikacje',
            compare_players: 'porównanie graczy',
            players_list: 'lista graczy',
            show_players_list: 'pokaż listę graczy',
            whites: 'biali',
            blacks: 'czarni',
            no_games_in_category: 'Brak zadań w tej kategorii',
            localization: 'Lokalizacja',
            app_name: 'Daredot',
            hello_world: 'Hello world!',
            action_settings: 'Settings',
            drawer_open: '',
            drawer_close: '',
            transition_name_namefield: 'transition:NAMEFIELD',
            transition_name_passfield: 'transition:PASSFIELD',
            transition_name_button: 'transition:BUTTON',
            transition_name_logo: 'transition:LOGO',
            transition_name_fab: 'transition:FAB',
            transition_name_fab2: 'transition:FAB2',
            hello_blank_fragment: 'Hello blank fragment',
            button_text_logout: 'wyloguj',
            menu_text_home: 'ekran główny',
            menu_text_challenges: 'twoje wyzwania',
            menu_text_new_challenge: 'nowe wyzwanie',
            menu_text_statistics: 'statystyki',
            menu_text_friends: 'znajomi',
            menu_text_qrcode_scanner: 'skaner qrcode',
            menu_text_settings: 'ustawienia',
            home_text_challenges_done: 'ukończone\nwyzwania',
            home_badges1: 'zdobyte',
            home_badges2: 'odznaki',
            home_challanges_created: 'utworzone\nwyzwania',
            home_text_show_all_challanges: 'wszystkie aktywne wyzwania',
            home_text_last_challenge: 'OSTATNIE WYZWANIE',
            login_text_name: 'Nazwa użytkownika',
            login_text_password: 'hasło',
            login_text_login: 'zaloguj się',
            login_text_or: 'lub',
            login_text_create_account: 'utwórz nowe konto',
            login_text_forgotten_password: 'zapomniałeś hasła?',
            login_text_bad_credentials: 'Login lub hasło niepoprawne!',
            login_text_no_account: 'Login lub hasło niepoprawne!',
            create_account_text_email: 'E-mail',
            create_account_text_create_account: 'utwórz konto i zaloguj się',
            create_account_text_name_taken: 'Wybrana nazwa jest już zajęta!',
            create_account_text_fields_required: 'Wszystkie pola są wymagane!',
            create_account_text_mail_taken: 'Wybrany email jest już zajęty!',
            create_account_text_creating_account: 'Tworzę konto...',
            password_text_description: 'Jeśli zapomniałeś swojego hasła, podaj nam swój adres e-mail, który podałeś przy rejestracji, a wyślemy Ci maila z nowym hasłem!',
            password_text_email_hint: 'twój e-mail',
            password_text_reset_password: 'zresetuj hasło',
            settings_text_username: 'Nazwa użytkownika',
            settings_text_username_dummy: 'użytkownik',
            settings_text_new_password: 'Nowe hasło',
            settings_text_confirm_new_password: 'Powtórz nowe hasło',
            settings_text_set_avatar: 'ustaw awatar',
            settings_text_save_settings: 'zapisz ustawienia',
            settings_text_password_mismatch: 'Podane hasła nie zgadzają się!',
            settings_text_settings_saved: 'USTAWIENIA ZAPISANE!',
            image_chooser_text_camera: 'APARAT',
            image_chooser_text_gallery: 'GALERIA',
            settings_text_settings_not_saved: 'Błąd! Nie zapisano ustawień!',
            friends_profile_text_remove_friend: 'usuń znajomego',
            friends_profile_text_last_badges: 'OSTATNIE ODZNAKI',
            statistics_text_badges: 'ZDOBYTE ODZNAKI',
            new_challenge_text_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis tempus nulla. Donec tincidunt mollis odio sed ultrices. Integer non facilisis nibh. Integer et lacus a urna laoreet tincidunt quis in metus.',
            new_challenge_text_select_challenges: 'wybierz zestaw zadań',
            new_challenge_text_create_new_set: 'nowy zestaw zadań',
            new_challenge_text_join_via_nfc: 'dołącz przez NFC',
            challenge_set_text_show_ranking: 'pokaż ranking graczy',
            challenge_set_text_ar_mode: 'widok rozszerzonej rzeczywistości',
            task_text_verify: 'poddaj weryfikacji',
            task_text_omit: 'pomiń to zadanie ($0.99)',
            tasks_text_do_task: 'WYKONAJ 3 ZADANIA',
            task_text_complete: 'WYKONAJ ',
            tasks_text_tasks: ' ZADANIA',
            challenge_full_text_end_date: 'koniec: ',
            notification_text_invitation: '\nzaprasza Cię do znajomych!',
            notification_text_invitation_accepted: '\nzaakceptował Twoje zaproszenie!',
            notification_text_challenge_done: 'Ukończono wyzwanie\nTwoja pozycja w rankingu:',
            notification_text_badge: 'Zdobyto odznakę:',
            notifications_text_user_done_challenge: ' ukończył zadanie',
            nfc_text_tap_to_connec: 'Stuknij w ekran, żeby połączyć',
            category_text_touristics: 'Turystyka',
            category_text_culture_history: 'Kultura i historia',
            category_text_entertainment: 'Rozrywka',
            category_text_party: 'Impreza',
            category_text_sport: 'Sport',
            challenge_join_text_join: 'dołącz do zestawu zadań',
            new_step1_text_settings: 'Ustawienia',
            step2_text_next_step_gamers: 'dalej - gracze',
            step2_text_tasks: 'Zadania',
            step2_text_add_task: 'dodaj zadanie',
            step1_text_set_name: 'Nazwa zestawu',
            step1_text_public: 'Publiczna',
            step1_text_teams: 'Drużynowa',
            step1_text_category: 'Kategoria',
            step1_text_date_end: 'Data zakończenia',
            step1_text_next_step_tasks: 'dalej - zadania',
            step1_text_set: 'Ustaw',
            step2_text_add_tasks_desc: 'Dodaj nowe zadania do zestawu',
            task_category_places: 'Miejsca',
            task_category_photos: 'Zdjęcia',
            task_category_distance: 'Dystans',
            task_category_checklist: 'Lista',
            new_task_text_new_task: 'Nazwa zadania',
            new_task_text_description: 'Opis zadania',
            new_task_place_text_place_name: 'Nazwa punktu',
            new_task_place_text_description: 'Tekst po dotarciu do punktu',
            new_task_text_photo_count: 'Ilość zdjęć',
            new_task_text_distance: 'Dystans',
            new_task_text_task_list: 'Lista miejsc',
            new_task_text_places_list: 'Lista miejsc',
            step3_text_players: 'Gracze',
            step3_text_add_players: 'dodaj znajomych',
            step3_text_add_via_NFC: 'dodaj przez NFC',
            step3_text_create_set_Text: 'utwórz zestaw zadań',
            home_text_add_new_challenge: 'dodaj nowe wyzwanie',
            new_challenge_step1_text_set_description: 'Opis zestawu',
            new_challenge_step1_text_upload_failed: 'Wysyłanie wyzwanie zakończone niepowodzeniem. Sprawdź dane i spróbuj jeszcze raz!',
            step2_text_error_challenge_try_again: 'Wystąpił błąd! Utwórz wyzwanie jeszcze raz.',
            friend_profile_text_profile_doesnt_exist: 'Błąd! Profil użytkownika nie istnieje!',
            add_friend_text: 'dodaj znajomego',
            friendst_list_text_no_friends: 'Nie masz przyjaciół. Dodaj kilku.',
            friend_profile_text_invite_sent: 'Zaproszenie wysłane! Gdy zostanie zaakceptowane - ta osoba pojawi się na liście Twoich znajomych.',
            friend_profile_text_user_doesnt_exist: 'Użytkownik nie istnieje!',
            friend_profile_text_inivte_already_sent: 'Zaproszenie już zostało wysłąne do tego użytkownika. Czekaj na akceptcję.',
            friend_profile_text_waiting_acceptation: 'czeka na akceptację',
            notifications_text_no_notifications: 'Nie masz żadnych powiadomień.',
            friend_profile_text_accept_invitation: 'akceptuj zaproszenie',
            step3_text_assigninig_failed: 'Przydzielanie znajomych zakończone niepowodzeniem! Spróbuj jeszcze raz!',
            step2_text_publish_failed: 'Zadanie nie może być zapisane! Spróbuj jeszcze raz!',
            challenge_team_name_white: 'Arnold Niszczy',
            challenge_team_name_black: 'czarni',
            photo_Fragment_text_add_photo: 'Dodaj zdjęcie',
            category_select_text_touristics: 'Turystyka',
            challenge_join_text_challenge_missing: 'Ten zestaw nie istnieje! Wybierz inny!',
            challenge_search_text_no_games_in_this_category: 'Nie ma gier tego typu. Wybierz inną kategorię!',
            task_text_photos: ' ZDJĘCIA',
            task_text_add: 'DODAJ ',
            task_text_beat_the_distance: 'POKONAJ DYSTANS',
            task_text_visit: 'ODWIEDŹ ',
            task_text_places: ' MIEJSCA',
            task_text_start: 'start',
            task_text_save_photos: 'zapisz zdjęcia',
            task_text_save_checklist: 'zapisz listę',
            your_challenges_text_no_games: 'Brak gier. Dołącz do jakiejś albo stwórz nową',
            task_text_stop_tracking: 'zatrzymaj',
            task_text_start_tracking: 'start',
            compare_text_show_profile: 'dodaj rywala do znajomych',
            ar_text_show_players: 'inni gracze',
            ar_text_show_waypoints: 'inni gracze',
            ar_text_show_landscape: 'punkty gry',
            waypoint_dialog_text_name_point: 'Nazwa punktu:',
            waypoint_dialog_text_desc: 'Opis punktu:',
            waypoint_dialog_text_OK: 'OK',
            task_text_awiting_verification: 'czeka na weryfikację',
            notification_text_player_finished_task: 'Gracz ukończył zadanie',
            verification_text_failure: 'Weryfikacja nie przebiegła pomyślnie! Spróbuj jeszcze raz!',
            task_activity_text_task_completed_and_verified: 'ukończone i zweryfikowane',
            challenge_fragment_text_multiplayer: 'gra\ndrużynowa',
            challenge_join_text_join_white_team: 'dołącz do białej drużyny',
            challenge_join_text_join_black_team: 'dołącz do czarnej drużyny',
            challenge_join_text_unable_to_join: 'Błąd przy dołączaniu do gry!',
            nfc_share_text_invite_players_via_nfc: 'Zaproś graczy przez NFC',
            notification_text_player: 'Gracz ',
            notification_text_invited_you_to_game: ' zaprosił Cię do gry!',
            text_difficulty: 'Trudność',
            error_no_sim_or_gps: 'By korzystać z aplikacji włącz GPS oraz upewnij się, że masz dostęp do sieci komórkowej.',
            title_activity_account_settings: 'Ustawienia',
            title_activity_qrcode_scanner: 'Skaner QR-Code',
            title_activity_friend_profile: 'Profil znajomego',
            no_players_error: 'Przepraszamy! Brak aktywnych graczy w tej grze!',
            timer_until: 'do końca: ',
            badge1name: 'Bułka z masłem!',
            badge2name: 'Sport to zdrowie',
            badge3name: 'Włóczykij\n',
            badge4name: 'Fotograf\n',
            badge5name: 'Strzał w dziesiątkę!',
            badge6name: 'Do portfolio!\n',
            badge8name: 'Historyk\n',
            badge7name: 'Praca zespołowa',
            badge9name: 'Turysta\n',
            badge10name: 'Bumelant\n',
            badge11name: 'Imprezowicz\n',
            badge12name: 'Sportowiec\n',
            badge1_text: 'Ukończ swoje pierwsze wyzwanie',
            badge2_text: 'Pokonaj dystans 100km',
            badge3_text: 'Odwiedź 10 miejsc',
            badge4_text: 'Zrób 10 zdjęć',
            badge5_text: 'Rozegraj 10 wyzwań',
            badge6_text: 'Stwórz wyzwanie',
            badge7_text: 'Wygraj wyzwanie wraz ze swoją drużyną',
            badge8_text: 'Rozegraj wyzwanie z kategorii Kultura i Historia',
            badge9_text: 'Rozegraj wyzwanie z kategorii Turystyka',
            badge10_text: 'Rozegraj wyzwanie z kategorii Rozrywka',
            badge11_text: 'Rozegraj wyzwanie z kategorii Impreza',
            badge12_text: 'Rozegraj wyzwanie z kategorii Sport'
        }

        if ($scope.detectLang == 'pl' || $scope.detectLang == 'pl-PL' || $scope.detectLang == 'pl-pl') {
            $scope.lang = $scope.langpl;
        } else if ($scope.detectLang == 'de' || $scope.detectLang == 'de-DE' || $scope.detectLang == 'de-de') {
            $scope.lang = $scope.langde;
        } else {
            $scope.lang = $scope.langen;
        }
        
        $scope.lang.badgesTable=[
             $scope.lang.badge1name,
            $scope.lang.badge2name,
            $scope.lang.badge3name,
            $scope.lang.badge4name,
            $scope.lang.badge5name,
            $scope.lang.badge6name,
            $scope.lang.badge7name,
            $scope.lang.badge8name,
            $scope.lang.badge9name,
            $scope.lang.badge10name,
            $scope.lang.badge11name,
            $scope.lang.badge12name
        ]

        $scope.lang.badgesTableD=[
             $scope.lang.badge1_text,
            $scope.lang.badge2_text,
            $scope.lang.badge3_text,
            $scope.lang.badge4_text,
            $scope.lang.badge5_text,
            $scope.lang.badge6_text,
            $scope.lang.badge7_text,
            $scope.lang.badge8_text,
            $scope.lang.badge9_text,
            $scope.lang.badge10_text,
            $scope.lang.badge11_text,
            $scope.lang.badge12_text
        ]
        
        $scope.badgeDetails = function(text){
            ons.notification.alert({
                            message: text
                        });
        }
        
        $scope.loguj = function (tekst) {
            window.console && console.log(tekst);
        }

        //NOTE: Logowanie uzytkownika
        $scope.loginUser = function () {
            var user_email = $("#loginEmail").val();
            var user_password = $("#loginPassword").val();
            if ($.trim(user_email).length > 0 & $.trim(user_password).length > 0) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/security/get-api-key',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        username: user_email,
                        password: user_password
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            currentApiKey = respond.data.api_key;
                            $scope.user = angular.fromJson(respond.data);
                            $("#spinner").fadeOut(1000);
                            navi.pushPage('home.html', {
                                animation: 'slide'
                            });
                        }
                    },
                    error: function (respond) {
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            } else {
                ons.notification.alert({
                    message: 'Podaj e-mail i hasło'
                });
            }
        }

        //NOTE: Reset hasła
        $scope.recoverPassword = function () {
            var user_name = $("#recoverUser").val();
            var user_email = $("#recoverEmail").val();
            if ($.trim(user_email).length > 0 & $.trim(user_name).length > 0) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/registration/password-reset',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        username: user_name,
                        email: user_email
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Twoje hasło zostało wysłane na podany adres e-mail'
                            });
                            navi.popPage();
                        } else if (respond.status == "error") {
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    },
                    error: function (respond) {
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            } else {
                ons.notification.alert({
                    message: 'Podaj e-mail i nazwę uzytkownika'
                });
            }
        }

        //NOTE: Rejestracja uzytkownika
        $scope.registerUser = function () {
            var user_email = $("#newUserEmail").val();
            var user_name = $("#newUserName").val();
            var user_password = $("#newUserPassword").val();

            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            if (!validateEmail(user_email)) {
                ons.notification.alert({
                    message: 'Podany adres e-mail jest niepoprawny'
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/registration/register',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        email: user_email,
                        username: user_name,
                        password: user_password
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "exists") {
                            ons.notification.alert({
                                message: 'Hey! Już masz konto! możesz się zalogować'
                            });
                            $("#spinner").fadeOut(1000);
                            navi.popPage();
                        } else if (respond.status == "success") {
                            currentApiKey = respond.data.api_key;
                            $scope.user = angular.fromJson(respond.data);
                            $("#spinner").fadeOut(1000);
                            navi.pushPage('home.html', {
                                animation: 'slide'
                            });
                        }
                    }
                });
            }
        }

        //NOTE: Wylogowywanie
        $scope.logOut = function () {
            $.ajax({
                type: "POST",
                url: url + '/api/v1/security/logout',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    $("#spinner").fadeOut(1000);
                    menu.closeMenu();
                    navi.popPage();
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                }
            });
        }


        //NOTE: Otwieranie ekranu ustawień
        $scope.openSettings = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Settings') {
                $scope.currentPage = 'Settings'
                naviDash.replacePage('settings.html');
            }
        }

        //NOTE: Zmiana avatara
        $scope.changeAvatar = function () {
            function convertToDataURLviaCanvas(url, callback, outputFormat) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function () {
                    var canvas = document.createElement('CANVAS');
                    var ctx = canvas.getContext('2d');
                    var dataURL;
                    canvas.height = this.height * 0.1;
                    canvas.width = this.width * 0.1;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.translate(-canvas.width / 2, -canvas.height / 2);
                    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                    dataURL = canvas.toDataURL(outputFormat);
                    callback(dataURL);
                    canvas = null;
                };
                img.src = url;
            }

            function getLengthInBytes(str) {
                var b = str.match(/[^\x00-\xff]/g);
                return (str.length + (!b ? 0 : b.length));
            }

            function captureSuccess(mediaFiles) {
                var i, len;
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                    var avatrUzytkownika = mediaFiles[i].fullPath;
                    convertToDataURLviaCanvas(avatrUzytkownika, function (base64Img) {
                        avatrUzytkownika = base64Img;
                        window.console && console.log('Nowy awatar pobrany');
                        $('#avatarPreview').css('background-image', 'url(' + base64Img + ')');
                        $scope.user.new_avatar = base64Img.split(',')[1];
                        $scope.user.new_avatar_size = getLengthInBytes($scope.user.new_avatar);
                        window.console && console.log($scope.user.new_avatar_size);
                    });
                }
            }

            navigator.device.capture.captureImage(captureSuccess, console.log("capture"), {
                limit: 1
            });
        }


        //NOTE: Zapisywanie zmian w profilu użytkownika
        $scope.saveSettings = function () {
            var passwordOK = false;
            var sendData = false;
            if ($scope.user.newpassword || $scope.user.newpasswordr) {
                if ($scope.user.newpassword == $scope.user.newpasswordr) {
                    window.console && console.log('Nowe hasło gotowe do ustawienia');
                    passwordOK = true;
                } else {
                    ons.notification.alert({
                        message: 'Hasła się nie zgadzają'
                    });
                }
            }
            if ($scope.user.new_avatar) {
                window.console && console.log('Nowy awatar gotowy do ustawienia');
                var newAvatar = {
                    'sizeInBytes': $scope.user.new_avatar_size,
                    'mimeType': 'image/png',
                    'name': 'avatar',
                    'data': $scope.user.new_avatar
                }
            }
            if (passwordOK && $scope.user.newpassword && $scope.user.newpasswordr && $scope.user.new_avatar) {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    facebook_id: $scope.user.facebook_id,
                    twitter_id: $scope.user.twitter_id,
                    password: $scope.user.newpassword,
                    image: JSON.stringify({
                        'sizeInBytes': $scope.user.new_avatar_size,
                        'mimeType': 'image/png',
                        'name': 'avatar',
                        'data': $scope.user.new_avatar
                    })
                }
            } else if (passwordOK && $scope.user.newpassword && $scope.user.newpasswordr && !$scope.user.new_avatar) {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    facebook_id: $scope.user.facebook_id,
                    twitter_id: $scope.user.twitter_id,
                    password: $scope.user.newpassword
                }
            } else if (!$scope.user.newpassword && !$scope.user.newpasswordr && $scope.user.new_avatar) {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    facebook_id: $scope.user.facebook_id,
                    twitter_id: $scope.user.twitter_id,
                    image: JSON.stringify({
                        'sizeInBytes': $scope.user.new_avatar_size,
                        'mimeType': 'image/png',
                        'name': 'avatar',
                        'data': $scope.user.new_avatar
                    })
                }
            } else if (!$scope.user.newpassword && !$scope.user.newpasswordr) {
                sendData = true;
                var dataToSend = {
                    first_name: $scope.user.first_name,
                    last_name: $scope.user.last_name,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    facebook_id: $scope.user.facebook_id,
                    twitter_id: $scope.user.twitter_id
                }
            }

            if (sendData) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/update-profile',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: dataToSend,
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Zaktualizowano dane użytkownika');
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Twoje dane zostały zaktualizowane'
                            });
                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            }
        }


        //NOTE: Otwieranie notyfikacji
        $scope.openNotifications = function () {
            $scope.currentPage = 'Notifications';
            $.ajax({
                type: "GET",
                url: url + '/api/v1/notification/read',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    only_unread: 1
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Pobrano listę notyfikacji');
                        $scope.notifications = angular.fromJson(respond.data);
                        naviDash.pushPage('notifications.html');
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Błąd pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }


        //NOTE: Aktualizacja lokalizacji
        $scope.updateLocation = function () {
            var onSuccess = function (position) {
                var currentLocationLat = position.coords.latitude;
                var currentLocationLong = position.coords.longitude;

                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/update-location',
                    beforeSend: function () {},
                    data: {
                        latitude: currentLocationLat,
                        longitude: currentLocationLong
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                        if (respond.status == "success") {
                            window.console && console.log('Zaktualizowano lokalizacje');
                        } else if (respond.status == "error") {
                            window.console && console.log('error ' + respond.data);
                        }
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                    }
                });
            };

            var options = {};

            navigator.geolocation.getCurrentPosition(onSuccess, null, options);
        }

        //NOTE: Otwieranie ekranu głównego
        $scope.openHome = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Home') {
                $scope.currentPage = 'Home';
                naviDash.replacePage('homedash.html');
            }
        }


        //NOTE: Otwieranie ekranu statystyk
        $scope.openStats = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'Stats') {
                $scope.currentPage = 'Stats';
                naviDash.replacePage('stats.html');
            }
        }

        //NOTE: Otwieranie ekranu dodawania zadania
        $scope.openNewQuests = function () {
            menu.closeMenu();
            if ($scope.currentPage != 'NewQuests') {
                $scope.currentPage = 'NewQuests';
                naviDash.replacePage('addquest.html');
            }
        }

        //NOTE: Wyswietlanie wybranej kategorii
        $scope.getCategory = function (cat, name) {
            $scope.categoryName = name;
            $.ajax({
                type: "GET",
                url: url + '/api/v1/challenge/search',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    category_id: cat
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Pobrano zadania z kategorii ' + cat);
                        $scope.tasksInCategory = angular.fromJson(respond.data);
                        naviDash.pushPage('category.html');
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Błąd pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: Otwieranie detali zestawu
        $scope.questDetails = function (id) {
            window.console && console.log('Pobieram detale zestawu: ' + id);
            $.ajax({
                type: "GET",
                url: url + '/api/v1/challenge/read/' + id,
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Pobrano detale zestawu ' + id);
                        $scope.questDetailsData = angular.fromJson(respond.data);

                        if ($scope.questDetailsData.teams_stats) {
                            angular.forEach($scope.questDetailsData.teams_stats.tasks, function (task, key) {
                                window.console && console.log(task.name + " : " + key);
                                window.console && console.log($scope.questDetailsData.tasks[key].name);
                                task.id = $scope.questDetailsData.tasks[key].id;
                                task.type = $scope.questDetailsData.tasks[key].type.id;
                                task.difficulty = $scope.questDetailsData.tasks[key].difficulty;
                            }, true);
                        }

                        $scope.detailsMyPoints = 0;
                        $scope.detailsWhiteTeam = 0;
                        $scope.detailsBlackTeam = 0;

                        angular.forEach($scope.questDetailsData.tasks, function (task, key) {
                            if (task.verified != 0) {
                                $scope.detailsMyPoints++;
                            }
                        }, true);

                        angular.forEach($scope.questDetailsData.users, function (user, key) {
                            if (user.team == "white") {
                                $scope.detailsWhiteTeam++;
                            }
                            if (user.team == "black") {
                                $scope.detailsBlackTeam++;
                            }
                        }, true);


                        $scope.detailsMyLocation = 0;
                        var found = $filter('filter')($scope.questDetailsData.users, {
                            id: $scope.user.id
                        }, true);
                        if (found.length > 0) {
                            $scope.detailsMyLocation = found[0].location;
                        }


                        naviDash.pushPage('questdetails.html');
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Bład pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: Otwieranie listy graczy
        $scope.playersList = function (id) {
            $scope.currentPage = "PlayerList";
            naviDash.pushPage('playerslist.html');
        }

        //NOTE: Otwieranie rankingu graczy
        $scope.playersRanking = function (id) {
            $scope.currentPage = "RankingList";
            naviDash.pushPage('playerranking.html');
        }

        //NOTE: Sprawdzanie czy użytkownik jest przypisany do zestawu 
        $scope.userIn = function () {
            var currentUser = $scope.user.id;
            var found = $filter('filter')($scope.questDetailsData.users, {
                id: currentUser
            }, true);
            if (found.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        //NOTE: Sprawdzanie czy zadanie jest aktywne
        $scope.questActive = function () {
            var dataZadania = $scope.questDetailsData.finish_date;
            dataZadania = new Date(dataZadania);
            var now = new Date();
            if (now.getTime() >= dataZadania.getTime()) {
                return false;
            } else {
                return true;
            }
        }

        //NOTE: Dołącz do zadania
        $scope.joinQuest = function (quest, team) {
            if (team == "none") {
                var dataToSend = {
                    challenge_id: quest,
                    user_ids: '[' + $scope.user.id + ']'
                }
            } else {
                var dataToSend = {
                    challenge_id: quest,
                    user_ids: '[' + $scope.user.id + ']',
                    team: team
                }
            }
            $.ajax({
                type: "POST",
                url: url + '/api/v1/challenge/assign-users',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                headers: {
                    "api-key": currentApiKey
                },
                data: dataToSend,
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        window.console && console.log('Przypisano do zestawu');
                        $scope.openYourQuests();
                        $("#spinner").fadeOut(1000);

                    } else if (respond.status == "error") {
                        window.console && console.log('error ' + respond.data);
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Bład pobierania danych'
                        });
                    }
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: Detale zadania
        $scope.taskDetails = function (id) {
            window.console && console.log('Pobieranie detale zdania ' + id);
            $.ajax({
                type: "GET",
                url: url + '/api/v1/user/challenge/tasks',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                headers: {
                    "api-key": currentApiKey
                },
                data: {
                    task_id: id
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);
                    if (respond.status == "success") {
                        $("#spinner").fadeOut(1000);
                        $scope.taskDetailsData = angular.fromJson(respond.message);
                        $scope.taskDetailsData.readyToVerify = 0;
                        $scope.taskDetailsData.params = angular.fromJson($scope.taskDetailsData.task.lparams);
                        if ($scope.taskDetailsData.progress) {
                            $scope.taskDetailsData.progressParams = angular.fromJson($scope.taskDetailsData.progress.lparams);
                        }

                        // checklista
                        if ($scope.taskDetailsData.task.type.id == 8) {
                            $scope.taskDetailsData.display = [];

                            if (!$scope.taskDetailsData.progressParams) {
                                angular.forEach($scope.taskDetailsData.params.checklist, function (point, key) {
                                    var listpoint = {
                                        checklist: point,
                                        status: 0
                                    }
                                    $scope.taskDetailsData.display.push(listpoint);

                                }, true);
                            } else {
                                var finished = 0;
                                angular.forEach($scope.taskDetailsData.params.checklist, function (point, key) {
                                    var listpoint = {
                                        checklist: point,
                                        status: $scope.taskDetailsData.progressParams.status[key]
                                    }
                                    if ($scope.taskDetailsData.progressParams.status[key] == 1) {
                                        finished++;
                                    }
                                    $scope.taskDetailsData.display.push(listpoint);

                                }, true);
                                if ($scope.taskDetailsData.params.checklist.length == finished) {
                                    $scope.taskDetailsData.readyToVerify = 1;
                                }
                            }
                        }

                        // dystans
                        if ($scope.taskDetailsData.task.type.id == 6) {
                            $scope.taskDetailsData.display = [];
                            $scope.taskDetailsData.display.button = "start";
                            $scope.taskDetailsData.display.location = 0;
                            if ($scope.taskDetailsData.progressParams) {
                                $scope.taskDetailsData.display.distance = $scope.taskDetailsData.progressParams.distance;
                                $scope.taskDetailsData.display.tracked = $scope.taskDetailsData.progressParams.tracked;
                                if ($scope.taskDetailsData.display.tracked >= $scope.taskDetailsData.display.distance) {
                                    $scope.taskDetailsData.readyToVerify = 1;
                                }
                            } else {
                                $scope.taskDetailsData.display.distance = $scope.taskDetailsData.params.distance;
                                $scope.taskDetailsData.display.tracked = 0;
                            }
                        }

                        //zdjecia 
                        if ($scope.taskDetailsData.task.type.id == 9) {
                            $scope.taskDetailsData.display = [];
                            $scope.taskDetailsData.display.images = [];
                            for (var i = 1; i <= $scope.taskDetailsData.params.number_of_photos; i++) {
                                var photo = {
                                    id: i,
                                    name: 'Dodaj zdjęcie',
                                    url: '',
                                    jest: 0
                                }
                                $scope.taskDetailsData.display.images.push(photo);
                            }


                            if ($scope.taskDetailsData.progressParams) {
                                var zdjecia = 0;
                                angular.forEach($scope.taskDetailsData.progressParams.images, function (point, key) {
                                    zdjecia++;
                                    $scope.taskDetailsData.display.images[key].id = point.id;
                                    $scope.taskDetailsData.display.images[key].name = point.name;
                                    $scope.taskDetailsData.display.images[key].url = point.url;
                                    $scope.taskDetailsData.display.images[key].jest = 1;
                                }, true);
                                if (zdjecia == $scope.taskDetailsData.progressParams.number_of_photos) {
                                    $scope.taskDetailsData.readyToVerify = 1;
                                }

                            } else {

                            }
                        }

                        //miejsca 
                        if ($scope.taskDetailsData.task.type.id == 10) {
                            $scope.taskDetailsData.display = [];
                            $scope.taskDetailsData.display.places = [];
                            for (var i = 0; i < $scope.taskDetailsData.params.points.length; i++) {
                                var place = {
                                    name: $scope.taskDetailsData.params.points[i].name,
                                    lng: $scope.taskDetailsData.params.points[i].lng,
                                    lat: $scope.taskDetailsData.params.points[i].lat,
                                    message: $scope.taskDetailsData.params.points[i].message,
                                    visited: 0
                                }
                                $scope.taskDetailsData.display.places.push(place);
                            }


                            if ($scope.taskDetailsData.progressParams) {

                            } else {

                            }
                        }

                        if ($scope.taskDetailsData.progress) {
                            if ($scope.taskDetailsData.progress.waiting_for_verification == 1 || $scope.taskDetailsData.progress.verified == 1) {
                                $scope.taskDetailsData.readyToVerify = 0;
                            }
                        }

                        window.console && console.log('Pobrane detale zdania');
                        naviDash.pushPage('taskdetails.html');
                    } else if (respond.status == "error") {
                        $("#spinner").fadeOut(1000);
                        window.console && console.log('error ' + respond.data);
                    }
                },
                error: function (respond) {
                    $("#spinner").fadeOut(1000);
                    window.console && console.log('error ' + JSON.stringify(respond));
                }
            });
        }

        //NOTE: Otwieranie twoich zadan 
        $scope.openYourQuests = function () {
            menu.closeMenu();
            window.console && console.log($scope.currentPage);
            if ($scope.currentPage != 'YourQuests') {
                $scope.currentPage = 'YourQuests';
                $.ajax({
                    type: "GET",
                    url: url + '/api/v1/user/challenges',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        finished: 0,
                        limit: 1000,
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        $scope.activeTasks = angular.fromJson(respond.data);
                        window.console && console.log(respond);
                        $.ajax({
                            type: "GET",
                            url: url + '/api/v1/user/challenges',
                            beforeSend: function () {
                                $("#spinner").css('display', 'block');
                            },
                            data: {
                                finished: 1,
                                limit: 1000,
                            },
                            headers: {
                                "api-key": currentApiKey
                            },
                            datatype: 'json',
                            cache: false,
                            success: function (respond) {
                                $scope.doneTasks = angular.fromJson(respond.data);
                                $("#spinner").fadeOut(1000);
                                window.console && console.log(respond);
                                naviDash.pushPage('yourquests.html');
                            },
                            error: function (respond) {
                                window.console && console.log('error ' + JSON.stringify(respond));
                                $("#spinner").fadeOut(1000);
                                ons.notification.alert({
                                    message: 'Podane dane są niepoprawne'
                                });
                            }
                        });
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            }
        }


        //NOTE: Otwieranie porównanie graczy
        $scope.comparePlayers = function (challenge_id, user_id) {
            var found = $filter('filter')($scope.questDetailsData.users, {
                id: user_id
            }, true);
            window.console && console.log(found[0]);
            $scope.compereWith = found[0];
            $scope.currentPage = 'Compare';
            $.ajax({
                type: "GET",
                url: url + '/api/v1/user/challenges/compare',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    challenge_id: challenge_id,
                    user_id: user_id,
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    $("#spinner").fadeOut(1000);
                    $scope.compare = angular.fromJson(respond.message);
                    window.console && console.log(respond);

                    $.ajax({
                        type: "GET",
                        url: url + '/api/v1/user/challenges/compare',
                        beforeSend: function () {
                            $("#spinner").css('display', 'block');
                        },
                        data: {
                            challenge_id: challenge_id,
                            user_id: $scope.user.id,
                        },
                        headers: {
                            "api-key": currentApiKey
                        },
                        datatype: 'json',
                        cache: false,
                        success: function (respond) {
                            $("#spinner").fadeOut(1000);
                            $scope.compareMyPoints = angular.fromJson(respond.message);
                            window.console && console.log(respond);

                            var myPoints = 0;
                            var otherPoints = 0;
                            angular.forEach($scope.compare, function (task, key) {
                                task.verifiedMy = $scope.compareMyPoints[key].verified;
                                if (task.verifiedMy != 0) {
                                    myPoints++;
                                }
                                if (task.verified != 0) {
                                    otherPoints++;
                                }
                            }, true);
                            $scope.myPoints = myPoints;
                            $scope.otherPoints = otherPoints;

                            naviDash.pushPage('compare.html');
                        },
                        error: function (respond) {
                            window.console && console.log('error ' + JSON.stringify(respond));
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    });

                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: Otwieranie zakładki zadania aktywne {
        $scope.showActiveTasks = function () {
            $('#activeTasks').css('display', 'block');
            $('#doneTasks').css('display', 'none');
        }

        //NOTE: Otwieranie zakładki zadania ukończone {
        $scope.showDoneTasks = function () {
            $('#activeTasks').css('display', 'none');
            $('#doneTasks').css('display', 'block');
        }


        //NOTE: Przesyłanie zadania do weryfikacji
        $scope.taskVerify = function (taskid, type) {

            if (type == 8) {
                var checklist = $scope.taskDetailsData.params.checklist;
                var status = [1];
                var i = 0;
                for (i = 1; i < $scope.taskDetailsData.params.checklist.length; i++) {
                    status.push(1);
                }
                window.console && console.log(status);
                var dataToSend = {
                    checklist: checklist,
                    status: status
                }
            }

            if (type == 6) {
                var dataToSend = {
                    distance: $scope.taskDetailsData.display.distance,
                    tracked: $scope.taskDetailsData.display.tracked
                }
            }

            dataToSend = JSON.stringify(dataToSend);


            if (type == 6 || type == 8) {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/challenges/task/update',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        task_id: taskid,
                        lparams: dataToSend,
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);

                        $.ajax({
                            type: "POST",
                            url: url + '/api/v1/user/challenges/task/send-to-verification',
                            beforeSend: function () {
                                $("#spinner").css('display', 'block');
                            },
                            data: {
                                task_id: taskid
                            },
                            headers: {
                                "api-key": currentApiKey
                            },
                            datatype: 'json',
                            cache: false,
                            success: function (respond) {
                                $("#spinner").fadeOut(1000);
                                window.console && console.log(respond);
                                naviDash.popPage();
                            },
                            error: function (respond) {
                                window.console && console.log('error ' + JSON.stringify(respond));
                                $("#spinner").fadeOut(1000);
                                ons.notification.alert({
                                    message: 'Podane dane są niepoprawne'
                                });
                            }
                        });

                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/challenges/task/send-to-verification',
                    beforeSend: function () {
                        $("#spinner").css('display', 'block');
                    },
                    data: {
                        task_id: taskid
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        $("#spinner").fadeOut(1000);
                        window.console && console.log(respond);
                        naviDash.popPage();
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            }
        }

        $scope.toogleCheck = function (index) {
            if ($scope.taskDetailsData.progress) {
                if ($scope.taskDetailsData.progress.waiting_for_verification == 0) {
                    var tmp = $scope.taskDetailsData.display[index].status;
                    if (tmp == 1) {
                        $scope.taskDetailsData.display[index].status = 0;
                    } else {
                        $scope.taskDetailsData.display[index].status = 1;
                    }

                    var finished = 0;
                    angular.forEach($scope.taskDetailsData.params.checklist, function (point, key) {
                        if ($scope.taskDetailsData.display[key].status == 1) {
                            finished++;
                        }
                    }, true);
                    if ($scope.taskDetailsData.params.checklist.length == finished) {
                        $scope.taskDetailsData.readyToVerify = 1;
                    } else {
                        $scope.taskDetailsData.readyToVerify = 0;
                    }
                }
            } else {
                var tmp = $scope.taskDetailsData.display[index].status;
                if (tmp == 1) {
                    $scope.taskDetailsData.display[index].status = 0;
                } else {
                    $scope.taskDetailsData.display[index].status = 1;
                }

                var finished = 0;
                angular.forEach($scope.taskDetailsData.params.checklist, function (point, key) {
                    if ($scope.taskDetailsData.display[key].status == 1) {
                        finished++;
                    }
                }, true);
                if ($scope.taskDetailsData.params.checklist.length == finished) {
                    $scope.taskDetailsData.readyToVerify = 1;
                } else {
                    $scope.taskDetailsData.readyToVerify = 0;
                }
            }
        }

        $scope.distanceStart = function () {
            function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1); // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c; // Distance in km
                return d;
            }

            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }

            var currentLocationLat = "";
            var currentLocationLong = "";
            var lastLocationLat = "";
            var lastLocationLong = "";
            var newDistance = 0;


            var onSuccessRun = function (position) {
                lastLocationLat = currentLocationLat;
                lastLocationLong = currentLocationLong;
                currentLocationLat = position.coords.latitude;
                currentLocationLong = position.coords.longitude;
                $scope.taskDetailsData.display.location = position.coords.latitude;
                $scope.$apply();
                window.console && console.log('Last:' + lastLocationLat + ':' + lastLocationLong);
                window.console && console.log('Current:' + currentLocationLat + ':' + currentLocationLong);
            };

            var options2 = {};

            navigator.geolocation.getCurrentPosition(onSuccessRun, null, options2);


            function startLoop() {
                timeinterval = setInterval(function () {
                    navigator.geolocation.getCurrentPosition(onSuccessRun, null, options2);
                    newDistance = getDistanceFromLatLonInKm(lastLocationLat, lastLocationLong, currentLocationLat, currentLocationLong);
                    window.console && console.log(newDistance);
                    if (newDistance < 1000) {
                        $scope.taskDetailsData.display.tracked = $scope.taskDetailsData.display.tracked + newDistance;
                        if ($scope.taskDetailsData.display.tracked >= $scope.taskDetailsData.display.distance) {
                            $scope.taskDetailsData.display.button = "zakończone";
                            $scope.taskDetailsData.display.active = 0;
                            $scope.taskDetailsData.readyToVerify == 1;
                            clearInterval(timeinterval);

                            var dataToSend = {
                                distance: $scope.taskDetailsData.display.distance,
                                tracked: $scope.taskDetailsData.display.tracked
                            }
                            dataToSend = JSON.stringify(dataToSend);

                            $.ajax({
                                type: "POST",
                                url: url + '/api/v1/user/challenges/task/update',
                                beforeSend: function () {

                                },
                                data: {
                                    task_id: $scope.taskDetailsData.task.id,
                                    lparams: dataToSend,
                                },
                                headers: {
                                    "api-key": currentApiKey
                                },
                                datatype: 'json',
                                cache: false,
                                success: function (respond) {
                                    window.console && console.log(respond);
                                },
                                error: function (respond) {
                                    window.console && console.log('error ' + JSON.stringify(respond));
                                    $("#spinner").fadeOut(1000);
                                    ons.notification.alert({
                                        message: 'Podane dane są niepoprawne'
                                    });
                                }
                            });
                        }
                    }
                }, 5000);
            }

            if ($scope.taskDetailsData.display.button == "start") {
                $scope.taskDetailsData.display.button = "stop";
                $scope.taskDetailsData.display.active = 1;
                startLoop();
            } else {
                $scope.taskDetailsData.display.button = "start";
                $scope.taskDetailsData.display.active = 0;
                clearInterval(timeinterval);
                var dataToSend = {
                    distance: $scope.taskDetailsData.display.distance,
                    tracked: $scope.taskDetailsData.display.tracked
                }
                dataToSend = JSON.stringify(dataToSend);


                $.ajax({
                    type: "POST",
                    url: url + '/api/v1/user/challenges/task/update',
                    beforeSend: function () {},
                    data: {
                        task_id: $scope.taskDetailsData.task.id,
                        lparams: dataToSend,
                    },
                    headers: {
                        "api-key": currentApiKey
                    },
                    datatype: 'json',
                    cache: false,
                    success: function (respond) {
                        window.console && console.log(respond);
                    },
                    error: function (respond) {
                        window.console && console.log('error ' + JSON.stringify(respond));
                        $("#spinner").fadeOut(1000);
                        ons.notification.alert({
                            message: 'Podane dane są niepoprawne'
                        });
                    }
                });
            }
        }


        $scope.removePhoto = function (id, index) {
            $.ajax({
                type: "POST",
                url: url + '/api/v1/user/challenges/task/remove-image',
                beforeSend: function () {
                    $("#spinner").css('display', 'block');
                },
                data: {
                    image_id: id
                },
                headers: {
                    "api-key": currentApiKey
                },
                datatype: 'json',
                cache: false,
                success: function (respond) {
                    window.console && console.log(respond);

                    $scope.taskDetailsData.display.images[index].jest = 0;
                    $scope.taskDetailsData.display.images[index].name = "Dodaj zdjęcie";
                    $scope.$apply();

                    $("#spinner").fadeOut(1000);
                },
                error: function (respond) {
                    window.console && console.log('error ' + JSON.stringify(respond));
                    $("#spinner").fadeOut(1000);
                    ons.notification.alert({
                        message: 'Podane dane są niepoprawne'
                    });
                }
            });
        }

        //NOTE: Dodawanie zdjecia
        $scope.addPhoto = function (numer) {
            function convertToDataURLviaCanvas(url, callback, outputFormat) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function () {
                    var canvas = document.createElement('CANVAS');
                    var ctx = canvas.getContext('2d');
                    var dataURL;
                    canvas.height = this.height * 0.1;
                    canvas.width = this.width * 0.1;
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.translate(-canvas.width / 2, -canvas.height / 2);
                    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                    dataURL = canvas.toDataURL(outputFormat);
                    callback(dataURL);
                    canvas = null;
                };
                img.src = url;
            }

            function getLengthInBytes(str) {
                var b = str.match(/[^\x00-\xff]/g);
                return (str.length + (!b ? 0 : b.length));
            }

            function captureSuccess(mediaFiles) {
                var i, len;
                for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                    var avatrUzytkownika = mediaFiles[i].fullPath;
                    convertToDataURLviaCanvas(avatrUzytkownika, function (base64Img) {
                        avatrUzytkownika = base64Img;
                        window.console && console.log('Zdjecie pobrane');
                        var tmpphoto = base64Img.split(',')[1];
                        var tmpphotosize = getLengthInBytes(tmpphoto);
                        window.console && console.log(tmpphotosize);
                        window.console && console.log('Zdjecie pobrane 2');
                        var dataToSend = {
                            task_id: $scope.taskDetailsData.task.id,
                            lparams: JSON.stringify({
                                'name': 'Dodane zdjęcie',
                                'sizeInBytes': tmpphotosize,
                                'mimeType': 'image/png',
                                'file_name': 'fsd.png',
                                'data': tmpphoto
                            })
                        }

                        $.ajax({
                            type: "POST",
                            url: url + '/api/v1/user/challenges/task/update',
                            beforeSend: function () {
                                $("#spinner").css('display', 'block');
                            },
                            data: dataToSend,
                            headers: {
                                "api-key": currentApiKey
                            },
                            datatype: 'json',
                            cache: false,
                            success: function (respond) {
                                window.console && console.log(respond);
                                var dataToSend2 = {
                                    lparams: JSON.stringify(respond)
                                }
                                $.ajax({
                                    type: "POST",
                                    url: "http://www.rabidata.kylos.pl/emaillog.php",
                                    data: dataToSend2,
                                    success: function () {
                                        window.console && console.log('wyslano log');
                                    }
                                });

                                $scope.taskDetailsData = angular.fromJson(respond.message);
                                $scope.taskDetailsData.readyToVerify = 0;
                                $scope.taskDetailsData.params = angular.fromJson($scope.taskDetailsData.task.lparams);
                                if ($scope.taskDetailsData.progress) {
                                    $scope.taskDetailsData.progressParams = angular.fromJson($scope.taskDetailsData.progress.lparams);
                                }

                                //zdjecia 
                                if ($scope.taskDetailsData.task.type.id == 9) {
                                    $scope.taskDetailsData.display = [];
                                    $scope.taskDetailsData.display.images = [];
                                    for (var i = 1; i <= $scope.taskDetailsData.params.number_of_photos; i++) {
                                        var photo = {
                                            id: i,
                                            name: 'Dodaj zdjęcie',
                                            url: '',
                                            jest: 0
                                        }
                                        $scope.taskDetailsData.display.images.push(photo);
                                    }

                                    if ($scope.taskDetailsData.progressParams) {
                                        var zdjecia = 0;
                                        angular.forEach($scope.taskDetailsData.progressParams.images, function (point, key) {
                                            zdjecia++;
                                            $scope.taskDetailsData.display.images[key].id = point.id;
                                            $scope.taskDetailsData.display.images[key].name = point.name;
                                            $scope.taskDetailsData.display.images[key].url = point.url;
                                            $scope.taskDetailsData.display.images[key].jest = 1;
                                        }, true);
                                        if (zdjecia == $scope.taskDetailsData.progressParams.number_of_photos) {
                                            $scope.taskDetailsData.readyToVerify = 1;
                                        }

                                    } else {

                                    }
                                }
                                $scope.$apply();
                                $("#spinner").fadeOut(1000);
                            },
                            error: function (respond) {
                                window.console && console.log('error ' + JSON.stringify(respond));
                                $("#spinner").fadeOut(1000);
                                ons.notification.alert({
                                    message: 'Podane dane są niepoprawne'
                                });
                            }
                        });

                    });
                }
            }

            navigator.device.capture.captureImage(captureSuccess, console.log("capture"), {
                limit: 1
            });
        }




        //Mapa
        $scope.initMap = function () {

            function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1); // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c; // Distance in km
                return d;
            }

            function deg2rad(deg) {
                return deg * (Math.PI / 180)
            }

            var onSuccess = function (position) {
                var currentLocationLat = position.coords.latitude;
                var currentLocationLong = position.coords.longitude;
                var dystans = getDistanceFromLatLonInKm(currentLocationLat, currentLocationLong, $scope.lat, $scope.long);
                window.console && console.log(dystans);
                if (dystans < 1) {
                    window.console && console.log('blisko');

                    var dataToSend = {
                        task_id: $scope.taskDetailsData.task.id,
                        lparams: JSON.stringify({
                            points: {
                                lat: 51.743050816712,
                                lng: 19.452592805028,
                                name: "Lidl",
                                desc: "Zrob zakupy tutaj po odwiedzeniu",
                                visited: 1
                            }
                        })
                    }

                    $.ajax({
                        type: "POST",
                        url: url + '/api/v1/user/challenges/task/update',
                        beforeSend: function () {
                            $("#spinner").css('display', 'block');
                        },
                        data: dataToSend,
                        headers: {
                            "api-key": currentApiKey
                        },
                        datatype: 'json',
                        cache: false,
                        success: function (respond) {
                            window.console && console.log(respond);


                            $("#spinner").fadeOut(1000);
                        },
                        error: function (respond) {
                            window.console && console.log('error ' + JSON.stringify(respond));
                            $("#spinner").fadeOut(1000);
                            ons.notification.alert({
                                message: 'Podane dane są niepoprawne'
                            });
                        }
                    });

                }
            };

            var options = {};
            navigator.geolocation.getCurrentPosition(onSuccess, null, options);

            var currentLocationLat = $scope.lat;
            var currentLocationLong = $scope.long;
            var myLatLng = {
                lat: $scope.lat,
                lng: $scope.long
            };
            var map;

            function GoogleMap() {
                this.initialize = function () {
                    map = showMap();
                }
                var showMap = function () {
                    var mapOptions = {
                        zoom: 10,
                        disableDefaultUI: true,
                        center: new google.maps.LatLng(currentLocationLat, currentLocationLong),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                    var markers = [];
                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: ''
                    });
                    return map;
                }
            }

            var map = new GoogleMap();

            map.initialize();
        }

        $scope.showOnMap = function (lat, long, placeid) {
            $scope.lat = lat;
            $scope.long = long;
            $scope.placeid = placeid;
            naviDash.pushPage('map.html', {
                animation: 'slide'
            });
        }

        $scope.closeMap = function () {
            naviDash.popPage();
        }
    });

    module.controller('MasterController', function ($scope, $projekty, $filter) {
        $scope.items = $projekty.items;
        var userID = $scope.user.idUser;
    });


    module.factory('$projekty', function () {
        var projekty = {};
        //NOTE: Lista projekty
        projekty.items = [];
        return projekty;
    });


})();