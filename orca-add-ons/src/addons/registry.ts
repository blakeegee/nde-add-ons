import { AddonRuntimeProfile } from './addon-profile.types';

const addonProfiles: Record<string, AddonRuntimeProfile> = {
  // Register add-on runtime profiles here.
};

export function resolveAddonRuntimeProfile(addonKey: string): AddonRuntimeProfile {
  const profile = addonProfiles[addonKey];

  if (!profile) {
    throw new Error(`Unknown add-on runtime profile "${addonKey}".`);
  }

  return profile;
}
