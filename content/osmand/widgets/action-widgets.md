---
title: "Action widgets"
intro: "Display information that is provided by additional plugins."
versions: '*'
---
## Parking widget (Android)

Shows the distance from users location to the parking place in default distance units. <br>

![Parking widget](/assets/images/docs/widgets/parking_widget.png)

| | |
|------------|------------|
| Enable | IMPORTANT: enable ‘Parking position’ plugin to use Parking widget. |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_parking %}  |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.parking %} |
| Click | Nothing |
| Format | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.general_settings_2 %} → {% data variables.android-values.units_and_formats %} → {% data variables.android-values.unit_of_length %} |
|        | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.sett_settings %} → {% data variables.ios-values.app_profiles %} → {% data variables.ios-values.general_settings_2 %} → {% data variables.ios-values.units_and_formats %} → {% data variables.ios-values.unit_of_length %} |
<!-- To mark parking place on the map user has to: <br>
Step 1: Zoom in the map <br>
Step 2: Make the long tap on the map  <br>
Step 3: Click ‘Actions’ button <br>
Step 4: Choose ‘Mark as parking location’ <br>
Step 5: Choose one of the parking options Time-unlimited or Time-limited parking <br>

The following menu will show the configurations of the parking spot such as parking time and date, information about parking limitation, distance from the current location to the parking spot. <br>
User can delete the parking location marker anytime with ‘Delete’ button. <br>
It will be removed from the map and from the calendar if such option has been chosen earlier. <br>

![Time limited unlimited](/assets/images/docs/widgets/time_limited_unlimited.png)

If 'Time-limited parking' has been selected at Step 5 a user can set the parking time interval. <br>
There are three ways to configure the parking time limit. The first one is by using the electronic watch control and the second one is by using analogue watch control. The third way is to tap the small keyboard image under numeric clock and set the time manually. <br>

The user can optionally add a notification to the Calendar by selecting appropriate option with the checkbox below. Click Ok when done.<br>
User may also add some extra information on the calendar screen appeared and press the ‘Save’ button in the upper-right corner to save an event to the default device calendar. <br> -->

## Trip recording (REC) widget

Is used to get the quick access to recording button. <br>

![Trip recording (REC) widget](/assets/images/docs/widgets/trip_recording_widget.png)

| | |
|------------|------------|
| Enable | IMPORTANT: enable ‘Trip recording’ plugin before attempting to use Trip recording widget |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_monitoring %}  |
|  | {% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.layer_map_appearance %} → {% data variables.ios-values.map_widget_right %} → {% data variables.ios-values.product_title_track_recording %} |
| Click | Define Trip recording settings.  |

<!-- Before recording the trip a Trip recording settings to be defined. Trip recording settings menu is displayed when user clicks on the REC widget. <br>

![Trip recording (REC) Settings](/assets/images/docs/widgets/rec_settings.png)

In the REC settings menu user can enable 'Show track' on the map feature and configure the style of the track line (for Android only). <br>

The 'Line configuration button' (for Android only) next to the toggle button 'Show track on the map' switcher gives the user an opportunity to change track appearance. User may change the color, width and enable/disable direction arrows, enable show start and finish icons. <br>

Optionally, user can configure Custom width by moving slider from 1 to 24. <br>


![Trip recording Appearence](/assets/images/docs/widgets/appearance_trip_recording.png)

In the REC Settings menu user can configure the logging interval from 0 seconds to 5 minutes. <br>
The Logging interval controls the frequency of queries to the GPS sensor along with frequency of new dots appearing in the track line. <br>

![Logging interval in Trip recording Appearence](/assets/images/docs/widgets/logging_interval_in_tr_widget.png)

If a user wants to apply all configurations to all others tracks recorded in future, the toggle button (switcher) ‘Always ask’ should be off. Please leave this switcher in 'on' position to be able to configure tracks individually. <br>
When all settings are defined, user can push the ‘Start recording’ button.


The Logging interval can be additionally checked/ changed in: <br>
{% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_profile %} → {% data variables.android-values.shared_string_trip_recording %} → {% data variables.android-values.save_track_interval %}. <br>
<!-- Menu – Configure profile – Trip recording – Logging interval during navigation <br>

When all settings are configured, press ‘Start recording’ button.
***For Android devices*** the REC widget will change to the red circle.  The distance passed will be displayed in the widget.  
![REC widget](/assets/images/docs/widgets/rec_widget.png)

To tap REC widget again will give an opportunity  to:
* See all general information about the track: distance, ascent, descent, average speed, maximum speed, time span. This panel can  be scrolled by the user right and back.
* Enable 'Show track' on the map feature and configure the style of the track line.
* Clear recorded data
* Start new segment
* Save (save the recorded track and change GPX file name)
* Pause and stop recording

User can find his track in {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places   %} →  tab {% data variables.android-values.shared_string_gpx_files %} <br>

***For IOS devices*** when the REC widget will change to the red circle, the  distance passed will be displayed in the widget.
To tap REC widget again will give an opportunity  to:
* Stop recording - will pause The trip recording. Then pressing the widget again will give and options to 'Continue recording'
* Show Info - will display statistics data such as speed, route time, uphills/downhills
* Start new segment
* Save current trip - the track will be automatically saved.

User can find his track in {% data variables.ios-values.menu %} → {% data variables.ios-values.menu_my_places %} → tab {% data variables.ios-values.shared_string_tracks %}.

[Track recording issues](https://docs.osmand.net/en/main@latest/osmand/troubleshooting/track-recording-issues)  -->

## Audio-video notes widget (Android)

Is used to get quick access to audio, video, photo notes button.

![Audio-video notes widget](/assets/images/docs/widgets/audio_video_notes_widget.png)

| | |
|------------|------------|
| Enable | IMPORTANT: enable [Audio-video notes plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#audio-video-notes-plugin) before attempting to use Audio-video notes widget. |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.map_widget_av_notes %}  |
| Click |  Define Audio-video notes settings. |

<!-- There is an exception for Audio-video notes widget:
For this widget user can additionally choose the option: <br>
* On request – allows the user to choose an action he wants to do. (default state).  <br>
* Record audio – allows the user to take an audio note <br>
* Record video – allows the user to take an video note <br>
* Take a photo – allows the user to take a photo <br>

The Audio-video notes widget is a clickable widget. It changes its state according to settings chosen in the Configure screen menu. <br>

To make  audio, video, photo notes  user have to choose the needed option by clicking on the widget. <br>

If 'On request' option is selected  user will see three options to choose. <br>
* Take an audio note <br>
* Take a video note <br>
* Take a photo <br>

When the 'Take an audio note' option is selected, the user  can start doing audio recording.  To stop audio recording the user has to click on the widget or the button 'Stop' at the bottom of the screen. <br>

![Take an Audio video notes](/assets/images/docs/widgets/take_an_audio_note_widget.png) <br>
When the 'Take a video note' option is selected, the user  can start doing video recording.  To stop video recording the user has to click on the widget or the button 'Stop' at the bottom of the screen. User can optionally show or hide the  video screen view by clicking the relevant button in the bottom-left corner. <br>

![Take a video note](/assets/images/docs/widgets/take_a_video_note_widget.png) <br>

When the 'Take a photo' option is selected, the user can take a picture. <br>

All audio, video files and photos will be in the {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.shared_string_my_places %} → tab {% data variables.android-values.notes %} . <br>
User can sort files by type/data, share and delete them. <br> -->
## Tracker widget (Android)

The widget is used to get quick access to the OsmAnd Tracker app that is used to share user location with other people. 

![Tracker widget](/assets/images/docs/widgets/tracker_widget.png)

| | |
|------------|------------|
| Enable | IMPORTANT: enable [OsmAnd Tracker plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#tracker-widget-plugin) before attempting to use Tracker widget. |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.tracker_item %}  |
| Click | redirected to the Mapillary application.  |


<!-- IMPORTANT: Enable   <br>

User can enable 'OsmAnd Tracker status' in Configure screen menu. <br>

IMPORTANT: Tap the OsmAnd Tracker widget and chose the tab 'Live now'. In the upper-right corner click three vertical dotes. Check settings. Choose the OsmAnd Tracker version that OsmAnd Tracker will use to display position.  -->
## Mapillary widget (Android)

The widget is used to get the quick access to Mapillary app to add missed images. <br>

![Mapillary widget](/assets/images/docs/widgets/mapillary_widget.png) <br>

| | |
|------------|------------|
| Enable | IMPORTANT: enable [Mapillary plugin](https://docs.osmand.net/en/main@latest/osmand/widgets/action-widgets#mapillary-plugin) before attempting to use Mapillary widget. |
|   | {% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.layer_map_appearance %} → {% data variables.android-values.map_widget_right %} → {% data variables.android-values.mapillary_item %}  |
| Click | Display OsmAnd Tracker settings.  |
| Note  |  The Mapillary application should be installed separately, for example, from Google Play. |

<!-- To add images, the user have to press the widget. He will be redirected to the Mapillary application. The Mapillary application should be installed separately, for example, from Google Play. -->
