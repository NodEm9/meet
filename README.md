# Project Name: Meet Application

This project is designed to provide a user-friendly event management application. Users can easily manage and visualize event details using this app.

## Features

- Show/Hide Event Details: Users can toggle the visibility of event details to focus on the information they need.
- Specify Number of Events: Users can specify the number of events they want to display at a time, allowing for better customization.
- Use the App When Offline: The app is designed to work seamlessly even when the user is offline, ensuring uninterrupted access to event information.
- Add an App Shortcut to the Home Screen: Users can add a shortcut to the app on their device's home screen for quick and easy access.
- Display Charts Visualizing Event Details: The app provides visually appealing charts that help users analyze and understand event details more effectively.

## User Story

As a user, I want to be able to manage and visualize event details easily. I want to be able to toggle the visibility of event details, specify the number of events I want to see, and use the app even when I'm offline. Additionally, I would like to have the option to add a shortcut to the app on my device's home screen for quick access. Lastly, I would like the app to provide charts that visually represent event details, helping me analyze and understand the data more effectively.

## Gherkin Syntax

```gherkin
Feature: Filter Events By City

  Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
    Given user hasn't search for a city
    When user opens the app
    Then the user should see the list of all upcoming events

  Scenario 2:  User should see a list of suggestions when they search for a city
    Given the user open the app
    When the user start typing a city name in the textbox 
    Then user should see a list of suggestion of cities from the dropdown 

  Scenario 3: User can select a city from the suggested list
    Given the event list is displayed
    When the user selects a city "Berlin Germany" from the city filter dropdown
    Then only events in "Berlin Germany" should be visible

Feature: 2: Show/Hide Event Details

  Scenario 1:  An event element is collapsed by default
    Given I am on the event management app
    When I toggle the visibility of event details
    Then I should be able to see/hide the event details
  
  Scenario 2: User can expand an event to see details
    Given the app is open and events are displayed
    When the user click the show event button 
    Then the user should see the hidden event expand to view.

  Scenario 3: User can collapse an event to hide details.
    Given the event is expanded and it's in visible
    When user click then hide event button
    Then I should see the event collape and hidden


Feature 3: Specify Number of Events

  Scenario: : When user hasn’t specified a number, 32 events are shown by default.
    Given I am on the event management app
    When I specify the number of events to display
    Then I should see the specified number of events

  Scenario: Use the App When Offline
    Given I have the event management app installed
    When I am offline
    Then I should still be able to use the app and access event information

  Scenario: Add an App Shortcut to the Home Screen
    Given I have the event management app installed
    When I add a shortcut to the home screen
    Then I should be able to access the app quickly from the home screen

  Scenario: Display Charts Visualizing Event Details
    Given I am on the event management app
    When I view event details
    Then I should see visually appealing charts representing the event data
```

-+-+-+-+-
