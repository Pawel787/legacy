import {expect, test} from "@playwright/test";
import verifyPhoneCkid from '../../test-data/verifyPhoneCkidBody.json';

let value: string = "+48662961000";

test('search user in CKID by API', async ({request}) => {

    verifyPhoneCkid.phoneNumber = value;

    const apiSearch = await request.post('https://api.uat.circlek.com/eu/ngrp-gmap-onboarding/v1/check-phone', {
        data: verifyPhoneCkid,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    console.log("======= POST RESPONSE CODE POST=======");
    console.log(apiSearch.status());
    expect(apiSearch.ok()).toBeTruthy();
    expect(apiSearch).not.toBeNull();

    let responseBody = await apiSearch.json();
    console.log("======= POST RESPONSE BODY POST=======");
    console.log(responseBody);
    // Check if phoneExists is true or false
    expect(responseBody.phoneExists).toBe(false); 
});