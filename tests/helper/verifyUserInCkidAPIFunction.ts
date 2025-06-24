import {expect, request} from "@playwright/test";
import verifyPhoneCkid from '../../test-data/verifyPhoneCkidBody.json';

export async function verifyUserInCkidAPIFunction(phone: string, visible: boolean) {

    verifyPhoneCkid.phoneNumber = "+48" + phone;

    const apiRequestContext = await request.newContext();
    const apiSearch = await apiRequestContext.post('https://api.uat.circlek.com/eu/ngrp-gmap-onboarding/v1/check-phone', {
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
    expect(responseBody.phoneExists).toBe(visible); 
}