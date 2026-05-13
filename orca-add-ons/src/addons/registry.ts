import { AddonRuntimeProfile } from './addon-profile.types';
import { orcaTestBannerProfile } from './orca-test-banner';

const addonProfiles: Record<string, AddonRuntimeProfile> = {
  'orca-test-banner': orcaTestBannerProfile
};

export function resolveAddonRuntimeProfile(addonKey: string): AddonRuntimeProfile {
  const profile = addonProfiles[addonKey];

  if (!profile) {
    throw new Error(`Unknown add-on runtime profile "${addonKey}".`);
  }

  return profile;
}
